class Api::RecentviewsController < ApplicationController

    def create
      product = Product.find(params[:idk])
      recentlyview = RecentView.check_existence(product.id)

        if recentlyview.nil?
          recentlyview = RecentView.new
          recentlyview.product_id = product.id
        end

      if current_user
        recentlyview.product_id = product.id
        currview = current_user.recentviews

        currview.each do |recent|
          next if recentlyview.product_id == recent.product_id
          recent.count += 1
          recent.save
        end

        recentlyview.count = 1
        recentlyview.save

        @products = RecentView.get_user_products(current_user.id)
      else
        RecentView.update_null_count

        recentlyview.count = 1
        recentlyview.save

        @products = RecentView.get_null_products
      end

        # Product.recently_viewed
        render "api/products/index"
      end

      
      def index

        if current_user
          @products = RecentView.get_user_products(current_user.id)
        else
          @products = RecentView.get_null_products
        end
        render "api/products/index"
      end


end