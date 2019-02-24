# == Schema Information
#
# Table name: reviews
#
#  id         :bigint(8)        not null, primary key
#  body       :string           default(""), not null
#  product_id :integer          not null
#  user_id    :integer          not null
#  rating     :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Review < ApplicationRecord
    validates :body, :rating, presence: true
    validates :rating, inclusion: { in: (1..5) } 
    validates :user_id, uniqueness: { scope: :product_id, message: "sorry, Only one review per listing" }

    belongs_to :product,
        primary_key: :id,
        foreign_key: :product_id,
        class_name: :Product
        
    belongs_to :author,
        primary_key: :id,
        foreign_key: :user_id,
        class_name: :User
end
