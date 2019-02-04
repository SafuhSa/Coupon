# == Schema Information
#
# Table name: recent_views
#
#  id         :bigint(8)        not null, primary key
#  user_id    :integer
#  count      :integer
#  product_id :integer
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class RecentView < ApplicationRecord
    validates :count, presence: true

    belongs_to :product,
        foreign_key: :product_id,
        class_name: :Product

        
        def self.check_existence(id)
           recentView = RecentView.find_by(product_id: id)

           recentView
        end

        def self.get_user_products(userId)
            recentlyViewed = RecentView.where('user_id = ?', userId).to_a.sort_by(&:count).reverse!
            products = []
            recentlyViewed.each do |recent|
                products << recent.product
            end
            products
        end

        def self.get_null_products
            recentlyViewed = RecentView.where('user_id IS NULL').to_a.sort_by(&:count).reverse!
            products = []
            recentlyViewed.each do |recent|
                products << recent.product
            end

            products
        end

        def self.update_null_count
             recentlyViewed = RecentView.where('user_id IS NULL').to_a
             recentlyViewed.each do |recent|
                recent.count += 1
                recent.save
             end
        end
end
