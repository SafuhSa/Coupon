class Api::RecentviewController < ApplicationController

    def create      
        product = Product.find(params[:idk])
        product.recentlyviewed = true
        product.save

        @products = Product.recently_viewed
        render "api/recentview/show"
      end

      
      def index
        @products = Product.recently_viewed
        render "api/products/index"
      end

end