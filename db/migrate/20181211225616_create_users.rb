class CreateUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t|
      t.string :username
      t.string :email
      t.string :password_digest
      t.string :session_token

      t.timestamps
    end
    add_index :users, :username,  unique: true
    add_index :users, :email,  unique: true
  end
end
