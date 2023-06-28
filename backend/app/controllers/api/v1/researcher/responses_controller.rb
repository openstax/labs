# frozen_string_literal: true

class Api::V1::Researcher::ResponsesController < Api::V1::BaseController

  def fetch
    (status, responses) = find_or_create_responses(
      params[:cutoff] ? params[:cutoff].to_datetime : Date.today,
      !has_enclaves_token?
    )

    render status: status, json: Api::V1::Bindings::Responses.new(
      status: responses.all?(&:is_complete) ? 'complete' : 'pending',
      response_urls: responses.filter(&:is_complete).flat_map { |r| r.files.map { |f| url_for(f) } }
    )
  end

  private

  def find_or_create_responses(cutoff, is_testing)
    analysis = Analysis.find_by(api_key: params[:api_key])
    return [:not_found, []] if analysis.nil?

    # add a day so that it gets everything that's contained in the day requested
    responses = analysis.response_exports
                  .for_cutoff(cutoff)
                  .where(is_testing: is_testing)
                  .order(created_at: :desc)

    if responses.none? || responses.first.is_stale?(cutoff)
      responses = analysis.stages.map do |stage|
        stage.response_exports.create!(
          is_testing: is_testing, cutoff_at: cutoff
          )
      end
    end

    [:ok, responses]
  end

end
