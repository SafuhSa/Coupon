class CreateBoughtItems < ActiveRecord::Migration[5.2]
  def change
    create_table :bought_items do |t|
      t.integer :product_id
      t.integer :quantity
      t.integer :cart_id

      t.timestamps
    end
    add_index :bought_items, :product_id
    add_index :bought_items, :cart_id
  end
end
