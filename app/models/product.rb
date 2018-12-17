# == Schema Information
#
# Table name: products
#
#  id           :bigint(8)        not null, primary key
#  seller_id    :integer
#  product_name :string
#  price        :integer
#  dis_price    :integer
#  description  :text
#  quantity     :integer
#  category     :string
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#

class Product < ApplicationRecord
    validates :seller_id, :product_name, :price, :dis_price, :quantity, :category, presence: true
    

    belongs_to :seller,
        foreign_key: :seller_id,
        class_name: :User



end
