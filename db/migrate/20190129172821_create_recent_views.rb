class CreateRecentViews < ActiveRecord::Migration[5.2]
  def change
    create_table :recent_views do |t|
      t.text :recent, array: true, default: []
      t.integer :user_id
      t.timestamps
    end
  end
end
