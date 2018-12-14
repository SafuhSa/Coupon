class ChangesToUsers < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :full_name, :string
    remove_column :users, :full_Name
  end
end
