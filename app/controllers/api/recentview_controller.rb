class Api::RecentviewController < ApplicationController

    def create      
        product = Product.find(params[:idk])
        product.recentlyviewed = true
        product.save

        # if current_user
        #   if current_user.recentview
        #     @recentview = current_user.recentview
        #     @recentview.recent << product
        #   else
        #     @recentview = RecentView.new
        #     @recentview.user_id = current_user.id
        #     @recentview.recent << product
        #   end
        # else
        #   @recentview = RecentView.all.select { |recent|  recent.user_id.nil?  }[0]
        #   if @recentview
        #     @recentview.recent << product
        #   else
        #     @recentview = RecentView.new
        #     @recentview.recent << product
        #   end
        # end        

        # @recentview.save
        render "api/recentview/show"
      end

      
      def index

        @products = Product.recently_viewed
        # if current_user
        #   @recentview = current_user.recentview
        # else
        #   @recentview = RecentView.all.select { |recent|  recent.user_id.nil?  }[0]
        # end

        render "api/products/index"
      end

end