class Api::RecentviewController < ApplicationController

    def show
        product = Product.first
        # @products

        if current_user
          if current_user.recentview
            @recentview = current_user.recentview
            @recentview << product
            @recentview.save
          else
            @recentview = RecentView.new
            @recentview.user_id = current_user.id
            @recentview << product
            @recentview.save
          end
        else
          @recentview = RecentView.all.select { |recent|  recent.user_id.nil?  }[0]
          if @recentview
            @recentview << product
          else
            @recentview = RecentView.new
            @recentview << product
            @recentview.save
          end
        end


        
        render "api/products/index"
      end

      

    # def recent_params
    #   params.require(:recentview).permit(:)
    # end
end