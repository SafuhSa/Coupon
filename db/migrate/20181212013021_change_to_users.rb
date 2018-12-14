class ChangeToUsers < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :full_Name, :string
  end
end
