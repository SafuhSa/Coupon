class Product < ApplicationRecord
    validates :seller_id, :Product_name, :price, :dis_price, :quantity, :category, presence: true

end
