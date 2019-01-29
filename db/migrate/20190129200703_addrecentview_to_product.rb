class AddrecentviewToProduct < ActiveRecord::Migration[5.2]
  def change
    add_column :products, :recentlyviewed, :boolean, :default => false
  end
end
