# == Schema Information
#
# Table name: carts
#
#  id             :bigint(8)        not null, primary key
#  buyer_id       :integer
#  purchase_total :integer
#  created_at     :datetime         not null
#  updated_at     :datetime         not null
#

class Cart < ApplicationRecord

  validates :buyer_id, :purchase_total, presence: true
  
  # has_many :products,
  #   foreign_key: :product_id,
  #   class_name: :BoughtItem

  has_many :products,
    foreign_key: :cart_id,
    class_name: :BoughtItem

  belongs_to :buyer,
      foreign_key: :buyer_id,
      class_name: :User

end
