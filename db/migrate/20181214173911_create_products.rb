class CreateProducts < ActiveRecord::Migration[5.2]
  def change
    create_table :products do |t|
      t.integer :seller_id
      t.string :product_name
      t.integer :price
      t.integer :dis_price
      t.text :description
      t.integer :quantity
      t.string :category

      t.timestamps
    end
      add_index :products, :product_name,  unique: true
      add_index :products, :dis_price
      add_index :products, :seller_id
      add_index :products, :category
  end
end
