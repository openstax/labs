# frozen_string_literal: true

class LaunchPad

  def initialize(study_id:, user_id:)
    @study_id = study_id
    @user_id = user_id
  end

  def launch_url(preview: false)
    if preview
      study.stages.order(:order).first.launcher(user_id).preview_url
    else
      raise(LaunchError, 'This study is not available.') unless study.available?

      ActiveRecord::Base.transaction do
        stage = study.next_stage_for_user(user)
        raise(LaunchError, 'No stage to launch exists') if stage.nil?

        stage.launch_by_user!(user)
        stage.launcher(user_id).url
      end
    end || raise('An error occurred when building a launch url')
  end

  def land(consent: true)
    raise(LandError, 'Not expecting a landing for this study') if stage.nil?

    # Mark the launched records consented and completed as needed.
    Study.transaction do
      stage.completed!
      if consent
        stage.launched_study.consented!
      else
        stage.launched_study.opted_out!
      end
      stage.launched_study.completed! if stage.is_last?
    end
  end

  def abort(reason)
    raise(LandError, 'Not expecting a landing for this study') if stage.nil?

    if reason == 'refusedconsent'
      stage.launched_study.aborted!
      return true
    end

    false
  end

  protected

  attr_reader :study_id
  attr_reader :user_id

  def study
    @study ||= Study.find(study_id)
  end

  def stage
    # At any time, a user has zero or one incomplete launched stages for a particular study.
    @stage ||= user.launched_stages(study: study)
                 .where(completed_at: nil)
                 .first
  end

  def user
    @user ||= User.new(user_id)
  end

end
