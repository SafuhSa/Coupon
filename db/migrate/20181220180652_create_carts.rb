class CreateCarts < ActiveRecord::Migration[5.2]
  def change
    create_table :carts do |t|
      t.integer :buyer_id
      t.integer :purchase_total

      t.timestamps
    end
    add_index :carts, :buyer_id
  end
end
