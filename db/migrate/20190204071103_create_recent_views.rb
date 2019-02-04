class CreateRecentViews < ActiveRecord::Migration[5.2]
  def change
    create_table :recent_views do |t|
      t.integer "user_id"
      t.integer 'count'
      t.integer 'product_id'
      t.timestamps
    end
  end
end
