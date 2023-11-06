# frozen_string_literal: true

require 'csv'

namespace :report do
  desc 'add user info to CSV file containing uuids'
  task :user_lookup, [:file] => :environment do |_, args|

    table = CSV.read(args[:file], headers: true)

    uuids = table.map { |row| row['user_uuid'] }

    userinfo = UserInfo.for_uuids(uuids) # .slice(0, 10))

    pn = Pathname.new(args[:file])

    CSV.open("#{pn.dirname}/#{pn.basename(pn.extname)}-with-users#{pn.extname}", 'w') do |csv|
      csv << table.headers.push('email_address', 'first_name', 'last_name')

      table.each do |row|
        updated = row.push({
                             'first_name' => userinfo[row['user_uuid']].try(:first_name),
                             'last_name' => userinfo[row['user_uuid']].try(:last_name),
                             'email_address' => userinfo[row['user_uuid']].try(:email_address)
                           })
        csv << updated
      end
    end

  end
end
