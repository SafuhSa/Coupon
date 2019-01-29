class Api::SearchController < ApplicationController

    def index
        @products = Product.search_results(params[:search])

        render "api/products/index"
      end
    
   
end