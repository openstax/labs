# frozen_string_literal: true

require 'openstax/auth/strategy_2'

class ApplicationController < ActionController::API
  def error404
    render json: 'Bad Request', status: 404
  end

  protected

  include RescueFromUnlessLocal

  def current_user_uuid
    @current_user_uuid ||=
      if Rails.env.development?
        if ENV['STUBBED_USER_UUID']
          ENV['STUBBED_USER_UUID']
        elsif cookies[:stubbed_user_uuid]
          cookies[:stubbed_user_uuid]
        end
      else
        if ENV['STUBBED_USER_UUID']
          Rails.logger.warn("`STUBBED_USER_UUID` environment variable is set but not used in " \
                            "the #{Rails.env} environment.")
        end

        OpenStax::Auth::Strategy2.user_uuid(request)
      end
  end

  def current_user_is_admin?
    Admin.where(user_id: current_user_uuid).any?
  end

  def render_unauthorized_unless_signed_in!
    head :unauthorized if current_user_uuid.nil?
  end
end
