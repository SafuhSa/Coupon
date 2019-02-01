class Api::RecentviewsController < ApplicationController

    def create
      product = Product.find(params[:idk])
      product.recentlyviewed = true
      product.save
      

        @products = Product.recently_viewed
        render "api/products/index"
      end

      
      def index
        @products = Product.recently_viewed
        render "api/products/index"
      end

end