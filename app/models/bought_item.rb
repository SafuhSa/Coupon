# == Schema Information
#
# Table name: bought_items
#
#  id         :bigint(8)        not null, primary key
#  product_id :integer
#  quantity   :integer
#  cart_id    :integer
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class BoughtItem < ApplicationRecord

  validates :product_id, :quantity, :cart_id, presence: true
  
    belongs_to :cart,
      foreign_key: :cart_id,
      class_name: :Cart


    has_one :buyer,
      through: :cart,
      source: :buyer




    belongs_to :product,
      foreign_key: :product_id,
      class_name: :Product

    
      
end
