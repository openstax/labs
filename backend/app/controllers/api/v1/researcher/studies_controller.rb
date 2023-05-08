# frozen_string_literal: true

class Api::V1::Researcher::StudiesController < Api::V1::Researcher::BaseController

  before_action :set_study, only: [:update, :destroy, :show]

  def create
    inbound_binding, error = bind(params.require(:study), Api::V1::Bindings::NewStudy)
    render(json: error, status: error.status_code) and return if error

    created_study = inbound_binding.create_model!(researcher: current_researcher)
    unless inbound_binding.stages.nil?
      inbound_binding.stages.each do |s|
        created_study.stages << Stage.new(s.to_hash.merge({config: {}}))
      end
    end

    response_binding = Api::V1::Bindings::Study.create_from_model(created_study)
    render json: response_binding, status: :created
  end

  def index
    studies = current_researcher.studies.includes(:researchers, :stages, :first_launched_study)
    response_binding = Api::V1::Bindings::Studies.new(
      data: studies.map do |study|
              Api::V1::Bindings::Study.create_from_model(study)
            end
    )
    render json: response_binding, status: :ok
  end

  def show
    response_binding = Api::V1::Bindings::Study.create_from_model(@study)
    render json: response_binding, status: :ok
  end

  # TODO Submit study for final review endpoint? or just special params on update?
  def update
    inbound_binding, error = bind(params.require(:study), Api::V1::Bindings::StudyUpdate)
    render(json: error, status: error.status_code) and return if error

    @study.update(inbound_binding.to_hash.except(:researchers, :stages))

    new_researchers = Array(inbound_binding.researchers).map do |researcher|
      # try StudyResearcher.first_or_create({researcher_id: researcher.id, role: researcher.role})
      StudyResearcher.create({ researcher_id: researcher.id, role: researcher.role })
    end

    # Newly added researchers
    newly_added = (new_researchers - @study.study_researchers) - [@current_researcher]

    # Removed researchers
    removed_researchers = (@study.study_researchers - new_researchers) - [@current_researcher]

    StudyResearcher.skip_callback(:destroy, :before, :check_destroy_leaves_another_researcher_in_study, raise: false)
    @study.study_researchers.replace(new_researchers.uniq)

    unless inbound_binding.stages.nil?
      @study.stages.clear
      inbound_binding.stages.each do |stage|
        s = Stage.where(id: stage.id).first_or_create(stage.to_hash.merge({ config: {} }))
        @study.stages << s
      end
    end


    response_binding = Api::V1::Bindings::Study.create_from_model(@study)
    render json: response_binding, status: :ok
  end

  def destroy
    @study.update!(is_hidden: true)
    head :ok
  end

  protected

  def set_study
    @study = Study.find(params[:id])
    raise SecurityTransgression unless @study.researchers.include?(current_researcher)
  end
end
