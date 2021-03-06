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
#  city         :string
#

class Product < ApplicationRecord
    validates :seller_id, :product_name, :price, :dis_price, :quantity, :category, presence: true
    
    validate :ensure_photos

    belongs_to :seller,
        foreign_key: :seller_id,
        class_name: :User

    has_many_attached :photos

       has_many :reviews,
        foreign_key: :product_id,
        class_name: :Review

    def ensure_photos
        unless self.photos.attached?
            errors[:photos] << 'Must be attached'
        end
    end

    def self.search_results(str)
        return Product.all if str == ""
        param = "%" + str.downcase + '%'
        products_city = Product.where('lower(city) LIKE ?', param).to_a
        products = Product.where('lower(category) LIKE ?', param).to_a
        products_name = Product.where('lower(product_name) LIKE ?', param).to_a
        products_des = Product.where('lower(description) LIKE ?', param).to_a
        (products_city + products + products_name + products_des).slice(0, 10)
    end
end
