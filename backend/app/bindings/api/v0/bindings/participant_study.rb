=begin
#OpenStax Labs API

#The labs API for OpenStax.  Requests to this API should include `application/json` in the `Accept` header.  The desired API version is specified in the request URL, e.g. `[domain]/api/v0/researcher/studies`. While the API does support a default version, that version will change over time and therefore should not be used in production code! 

OpenAPI spec version: 0.1.0

Generated by: https://github.com/swagger-api/swagger-codegen.git
Swagger Codegen version: 2.4.13

=end

require 'date'

module Api::V0::Bindings
  class ParticipantStudy
    # The study ID.
    attr_accessor :id

    # The study title that participants see.
    attr_accessor :title

    # The shorty study description that participants see.
    attr_accessor :short_description

    # The long study description that participants see.
    attr_accessor :long_description

    # The category of the study object, used for grouping.
    attr_accessor :category

    # The expected study duration in minutes.
    attr_accessor :duration_minutes

    # How many points will be awarded for participation in the study
    attr_accessor :participation_points

    # When the study was launched; null means not launched
    attr_accessor :first_launched_at

    # When the study was completed; null means not completed.
    attr_accessor :completed_at

    # When the study was opted-out of; null means not opted out.
    attr_accessor :opted_out_at

    # The study's researchers.
    attr_accessor :researchers

    # Mandatory studies must be completed by all users
    attr_accessor :is_mandatory

    class EnumAttributeValidator
      attr_reader :datatype
      attr_reader :allowable_values

      def initialize(datatype, allowable_values)
        @allowable_values = allowable_values.map do |value|
          case datatype.to_s
          when /Integer/i
            value.to_i
          when /Float/i
            value.to_f
          else
            value
          end
        end
      end

      def valid?(value)
        !value || allowable_values.include?(value)
      end
    end

    # Attribute mapping from ruby-style variable name to JSON key.
    def self.attribute_map
      {
        :'id' => :'id',
        :'title' => :'title',
        :'short_description' => :'short_description',
        :'long_description' => :'long_description',
        :'category' => :'category',
        :'duration_minutes' => :'duration_minutes',
        :'participation_points' => :'participation_points',
        :'first_launched_at' => :'first_launched_at',
        :'completed_at' => :'completed_at',
        :'opted_out_at' => :'opted_out_at',
        :'researchers' => :'researchers',
        :'is_mandatory' => :'is_mandatory'
      }
    end

    # Attribute type mapping.
    def self.swagger_types
      {
        :'id' => :'Integer',
        :'title' => :'String',
        :'short_description' => :'String',
        :'long_description' => :'String',
        :'category' => :'String',
        :'duration_minutes' => :'Integer',
        :'participation_points' => :'Float',
        :'first_launched_at' => :'DateTime',
        :'completed_at' => :'DateTime',
        :'opted_out_at' => :'DateTime',
        :'researchers' => :'Array<PublicResearcher>',
        :'is_mandatory' => :'BOOLEAN'
      }
    end

    # Initializes the object
    # @param [Hash] attributes Model attributes in the form of hash
    def initialize(attributes = {})
      return unless attributes.is_a?(Hash)

      # convert string to symbol for hash key
      attributes = attributes.each_with_object({}) { |(k, v), h| h[k.to_sym] = v }

      if attributes.has_key?(:'id')
        self.id = attributes[:'id']
      end

      if attributes.has_key?(:'title')
        self.title = attributes[:'title']
      end

      if attributes.has_key?(:'short_description')
        self.short_description = attributes[:'short_description']
      end

      if attributes.has_key?(:'long_description')
        self.long_description = attributes[:'long_description']
      end

      if attributes.has_key?(:'category')
        self.category = attributes[:'category']
      end

      if attributes.has_key?(:'duration_minutes')
        self.duration_minutes = attributes[:'duration_minutes']
      end

      if attributes.has_key?(:'participation_points')
        self.participation_points = attributes[:'participation_points']
      end

      if attributes.has_key?(:'first_launched_at')
        self.first_launched_at = attributes[:'first_launched_at']
      end

      if attributes.has_key?(:'completed_at')
        self.completed_at = attributes[:'completed_at']
      end

      if attributes.has_key?(:'opted_out_at')
        self.opted_out_at = attributes[:'opted_out_at']
      end

      if attributes.has_key?(:'researchers')
        if (value = attributes[:'researchers']).is_a?(Array)
          self.researchers = value
        end
      end

      if attributes.has_key?(:'is_mandatory')
        self.is_mandatory = attributes[:'is_mandatory']
      end
    end

    # Show invalid properties with the reasons. Usually used together with valid?
    # @return Array for valid properties with the reasons
    def list_invalid_properties
      invalid_properties = Array.new
      if @id.nil?
        invalid_properties.push('invalid value for "id", id cannot be nil.')
      end

      if @title.nil?
        invalid_properties.push('invalid value for "title", title cannot be nil.')
      end

      if @short_description.nil?
        invalid_properties.push('invalid value for "short_description", short_description cannot be nil.')
      end

      if @category.nil?
        invalid_properties.push('invalid value for "category", category cannot be nil.')
      end

      if @duration_minutes.nil?
        invalid_properties.push('invalid value for "duration_minutes", duration_minutes cannot be nil.')
      end

      invalid_properties
    end

    # Check to see if the all the properties in the model are valid
    # @return true if the model is valid
    def valid?
      return false if @id.nil?
      return false if @title.nil?
      return false if @short_description.nil?
      return false if @category.nil?
      category_validator = EnumAttributeValidator.new('String', ['research_study', 'cognitive_task', 'survey'])
      return false unless category_validator.valid?(@category)
      return false if @duration_minutes.nil?
      true
    end

    # Custom attribute writer method checking allowed values (enum).
    # @param [Object] category Object to be assigned
    def category=(category)
      validator = EnumAttributeValidator.new('String', ['research_study', 'cognitive_task', 'survey'])
      unless validator.valid?(category)
        fail ArgumentError, 'invalid value for "category", must be one of #{validator.allowable_values}.'
      end
      @category = category
    end

    # Checks equality by comparing each attribute.
    # @param [Object] Object to be compared
    def ==(o)
      return true if self.equal?(o)
      self.class == o.class &&
          id == o.id &&
          title == o.title &&
          short_description == o.short_description &&
          long_description == o.long_description &&
          category == o.category &&
          duration_minutes == o.duration_minutes &&
          participation_points == o.participation_points &&
          first_launched_at == o.first_launched_at &&
          completed_at == o.completed_at &&
          opted_out_at == o.opted_out_at &&
          researchers == o.researchers &&
          is_mandatory == o.is_mandatory
    end

    # @see the `==` method
    # @param [Object] Object to be compared
    def eql?(o)
      self == o
    end

    # Calculates hash code according to all attributes.
    # @return [Fixnum] Hash code
    def hash
      [id, title, short_description, long_description, category, duration_minutes, participation_points, first_launched_at, completed_at, opted_out_at, researchers, is_mandatory].hash
    end

    # Builds the object from hash
    # @param [Hash] attributes Model attributes in the form of hash
    # @return [Object] Returns the model itself
    def build_from_hash(attributes)
      return nil unless attributes.is_a?(Hash)
      self.class.swagger_types.each_pair do |key, type|
        if type =~ /\AArray<(.*)>/i
          # check to ensure the input is an array given that the attribute
          # is documented as an array but the input is not
          if attributes[self.class.attribute_map[key]].is_a?(Array)
            self.send("#{key}=", attributes[self.class.attribute_map[key]].map { |v| _deserialize($1, v) })
          end
        elsif !attributes[self.class.attribute_map[key]].nil?
          self.send("#{key}=", _deserialize(type, attributes[self.class.attribute_map[key]]))
        end # or else data not found in attributes(hash), not an issue as the data can be optional
      end

      self
    end

    # Deserializes the data based on type
    # @param string type Data type
    # @param string value Value to be deserialized
    # @return [Object] Deserialized data
    def _deserialize(type, value)
      case type.to_sym
      when :DateTime
        DateTime.parse(value)
      when :Date
        Date.parse(value)
      when :String
        value.to_s
      when :Integer
        value.to_i
      when :Float
        value.to_f
      when :BOOLEAN
        if value.to_s =~ /\A(true|t|yes|y|1)\z/i
          true
        else
          false
        end
      when :Object
        # generic object (usually a Hash), return directly
        value
      when /\AArray<(?<inner_type>.+)>\z/
        inner_type = Regexp.last_match[:inner_type]
        value.map { |v| _deserialize(inner_type, v) }
      when /\AHash<(?<k_type>.+?), (?<v_type>.+)>\z/
        k_type = Regexp.last_match[:k_type]
        v_type = Regexp.last_match[:v_type]
        {}.tap do |hash|
          value.each do |k, v|
            hash[_deserialize(k_type, k)] = _deserialize(v_type, v)
          end
        end
      else # model
        temp_model = Api::V0::Bindings.const_get(type).new
        temp_model.tap{|tm| tm.build_from_hash(value)}
      end
    end

    # Returns the string representation of the object
    # @return [String] String presentation of the object
    def to_s
      to_hash.to_s
    end

    # to_body is an alias to to_hash (backward compatibility)
    # @return [Hash] Returns the object in the form of hash
    def to_body
      to_hash
    end

    # Returns the object in the form of hash
    # @return [Hash] Returns the object in the form of hash
    def to_hash
      hash = {}
      self.class.attribute_map.each_pair do |attr, param|
        value = self.send(attr)
        next if value.nil?
        hash[param] = _to_hash(value)
      end
      hash
    end

    # Outputs non-array value in the form of hash
    # For object, use to_hash. Otherwise, just return the value
    # @param [Object] value Any valid value
    # @return [Hash] Returns the value in the form of hash
    def _to_hash(value)
      if value.is_a?(Array)
        value.compact.map { |v| _to_hash(v) }
      elsif value.is_a?(Hash)
        {}.tap do |hash|
          value.each { |k, v| hash[k] = _to_hash(v) }
        end
      elsif value.respond_to? :to_hash
        value.to_hash
      else
        value
      end
    end

  end
end
