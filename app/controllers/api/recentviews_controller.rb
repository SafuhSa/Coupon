class Api::RecentviewsController < ApplicationController

    def create
      product = Product.find(params[:idk])
      recentlyview = RecentView.check_existence(product.id)

        if recentlyview.nil?
          recentlyview = RecentView.new
          recentlyview.product_id = product.id
        end

      if current_user
        RecentView.update_user_rv_count(current_user.id)
        recentlyview.user_id = current_user.id
        
        recentlyview.count = 1
        recentlyview.save
        @products = RecentView.get_user_products(current_user.id)
      else
        RecentView.update_null_count

        recentlyview.count = 1
        recentlyview.save

        @products = RecentView.get_null_products
      end


        @products = convert_to_hash(@products)
        render "api/recentview/index"
      end

      
      def index
        if current_user
          @produc = RecentView.get_user_products(current_user.id)      
        else
          @produc = RecentView.get_null_products
        end
        
        @products = convert_to_hash(@produc)
        render "api/recentview/index"
      end

      def convert_to_hash(products)
        return nil if products.nil?
        arr = []
        products.each do |product|

          hsh = product.attributes
          if product.photos.attached?
            hsh['photoUrls'] = product.photos.map { |file| url_for(file) }
          end

          arr << hsh
        end

        arr
      end
end