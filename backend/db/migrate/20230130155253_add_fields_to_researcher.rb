class AddFieldsToResearcher < ActiveRecord::Migration[6.1]
  def change
    add_column :researchers, :lab_page, :string
    add_column :researchers, :research_interest_1, :string
    add_column :researchers, :research_interest_2, :string
    add_column :researchers, :research_interest_3, :string

  end
end
