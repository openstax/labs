# frozen_string_literal: true

class Api::V1::Researcher::StagesSwagger
  include Swagger::Blocks
  include OpenStax::Swagger::SwaggerBlocksExtensions

  swagger_component  do
    schema :NewStage do
      key :required, %w[config]
    end

    schema :StageUpdate do
      key :required, %w[id config]
    end

    schema :Stage do
      key :required, %w[id order config return_url]
    end

    schema :QualtricsStage do
      key :required, %w[type url secret_key]
      property :type do
        key :type, :string
        key :description, 'The type of this stage config'
        key :enum, %w[qualtrics]
      end
      property :url do
        key :type, :string
        key :description, 'The Qualtrics URL that this stage launches to'
        key :minLength, 1
      end
      property :secret_key do
        key :type, :string
        key :description, 'The survey secret used to encrypt information we send to Qualtrics'
        key :minLength, 1
      end
    end
  end

  add_properties(:Stage) do
    property :id do
      key :type, :integer
      key :description, 'The study ID.'
      key :readOnly, true
    end
  end

  add_properties(:Stage, :NewStage, :StageUpdate) do
    property :order do
      key :type, :integer
      key :description, 'An integer that describes the sort order for this stage'
      key :readOnly, true
    end
    property :title do
      key :type, :string
      key :description, 'The name of the stage'
    end
    property :description do
      key :type, :string
      key :description, 'The longer description shown to participants'
    end
    property :available_after_days do
      key :type, :number
      key :description, 'How many days after previous stage will this become available'
    end
    property :config do
      key :type, :object
      key :description,  'The configuration for a particular kind of stage, e.g. Qualtrics.  ' \
                         'See `QualtricsStage`'
    end
  end



  swagger_path '/researcher/studies/{id}/stages' do
    operation :post do
      key :summary, 'Add a stage to a study'
      key :description, 'Add a stage to study'
      key :operationId, 'addStage'
      key :tags, [
        'Studies'
      ]
      parameter do
        key :name, :id
        key :in, :path
        key :description, 'The study ID'
        key :required, true
        key :schema, { type: :integer }
      end
      request_body do
        key :description, 'The stage data'
        content 'application/json' do
          schema do
            property :stage do
              key :required, true
              key :$ref, :NewStage
            end
          end
        end
      end
      response 201 do
        key :description, 'Created.  Returns the created stage.'
        content 'application/json' do
          schema { key :$ref, :Stage }
        end
      end
      extend Api::V1::SwaggerResponses::AuthenticationError
      extend Api::V1::SwaggerResponses::ForbiddenError
      extend Api::V1::SwaggerResponses::UnprocessableEntityError
      extend Api::V1::SwaggerResponses::ServerError
    end
  end

  swagger_path '/researcher/stages/{id}' do
    operation :get do
      key :summary, 'Get a stage'
      key :description, 'Get a stage'
      key :operationId, 'getStage'
      key :tags, [
        'Studies'
      ]
      parameter do
        key :name, :id
        key :in, :path
        key :description, 'ID of the stage to get.'
        key :required, true
        key :schema, { type: :integer }
      end
      response 200 do
        key :description, 'Success.  Returns the stage.'
        content 'application/json' do
          schema { key :$ref, :Stage }
        end
      end
      extend Api::V1::SwaggerResponses::AuthenticationError
      extend Api::V1::SwaggerResponses::ForbiddenError
      extend Api::V1::SwaggerResponses::UnprocessableEntityError
      extend Api::V1::SwaggerResponses::ServerError
    end
  end

  swagger_path '/researcher/stages/{id}' do
    operation :put do
      key :summary, 'Update a stage'
      key :description, 'Update a stage'
      key :operationId, 'updateStage'
      key :tags, [
        'Studies'
      ]
      parameter do
        key :name, :id
        key :in, :path
        key :description, 'ID of the stage to update.'
        key :required, true
        key :schema, { type: :integer }
      end

      request_body do
        key :description, 'The stage updates.'
        key :required, true
        content 'application/json' do
          schema do
            key :$ref, :StageUpdate
          end
        end
      end
      response 200 do
        key :description, 'Success.  Returns the updated stage.'
        content 'application/json' do
          schema { key :$ref, :Stage }
        end
      end
      extend Api::V1::SwaggerResponses::AuthenticationError
      extend Api::V1::SwaggerResponses::ForbiddenError
      extend Api::V1::SwaggerResponses::UnprocessableEntityError
      extend Api::V1::SwaggerResponses::ServerError
    end
  end

  swagger_path '/researcher/stages/{id}' do
    operation :delete do
      key :summary, 'Delete a stage'
      key :description, 'Delete a stage'
      key :operationId, 'deleteStage'
      key :tags, [
        'Studies'
      ]
      parameter do
        key :name, :id
        key :in, :path
        key :description, 'ID of the stage to delete.'
        key :required, true
        key :schema, { type: :integer }
      end
      response 200 do
        key :description, 'Success.'
      end
      extend Api::V1::SwaggerResponses::AuthenticationError
      extend Api::V1::SwaggerResponses::ForbiddenError
      extend Api::V1::SwaggerResponses::UnprocessableEntityError
      extend Api::V1::SwaggerResponses::ServerError
    end
  end
end
