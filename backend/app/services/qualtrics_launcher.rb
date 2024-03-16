# frozen_string_literal: true

require 'openssl'

class QualtricsLauncher
  include Rails.application.routes.url_helpers

  def initialize(secret_key:, survey_id:, user_id:, study_id:, stage_ordinal:)
    @secret_key = secret_key
    @survey_id = survey_id
    @user_id = user_id
    @study_id = study_id
    @stage_ordinal = stage_ordinal
  end

  def url
    uri = URI("#{Rails.application.credentials.qualtrics_launch_url}/#{survey_id}")
    uri.query = URI.encode_www_form([['ssotoken', sso_token]])
    uri.to_s
  end

  def preview_url
    "#{url}&Q_CHL=preview&Q_SurveyVersionID=current"
  end

  protected

  attr_reader :secret_key
  attr_reader :study_id # study id is the Kinetic model's ID
  attr_reader :survey_id # survey is the Qualtrics ID
  attr_reader :user_id
  attr_reader :stage_ordinal

  def sso_token
    # these values will be url encoded along with the md5hash in the url method.
    # if we encode them here before generating the md5sum,
    # qualtrics will fail to properly decode them, causing
    # slashes in the "return_to_url" to be percent escaped.
    # when previewing, there is no launched_study
    raw_query = [
      ['timestamp', Time.now.utc.iso8601],
      ['expiration', 1.hour.from_now.utc.iso8601],
      ['research_id', ResearchId.for_user_id(user_id).id],
      ['return_to_url', frontend_returning_url(study_id:)],
      ['is_testing', !Kinetic.is_production?],
      ['opted_out', launched_study&.opted_out_at],
      ['consented', launched_study&.consent_granted],
      ['stage_ordinal', stage_ordinal],
      ['study_id', study_id]
    ].map { |k, v| "#{k}=#{v}" }.join('&')
    hash = md5_hash(raw_query)
    encrypt("#{raw_query}&mac=#{hash}")
  end

  def encrypt(value)
    aes = OpenSSL::Cipher.new('AES-128-ECB')
    aes.encrypt
    aes.key = secret_key
    encrypted = aes.update(value) + aes.final
    Base64.strict_encode64(encrypted)
  end

  def md5_hash(value)
    puts('HELLO!!!')
    puts(secret_key, value)
    hash = OpenSSL::HMAC.digest(OpenSSL::Digest.new('md5'), secret_key, value)
    Base64.strict_encode64(hash)
  end

  def launched_study
    # There should be only one not-completed
    @launched_study ||= LaunchedStudy.where({ user_id:, study_id:,
                                              completed_at: nil }).first
  end

end
