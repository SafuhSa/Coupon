class RemoveAddColumns < ActiveRecord::Migration[5.2]
  def change

    add_column :products, :city, :string
    remove_column :products, :recentlyviewed
  end
end
