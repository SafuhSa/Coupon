class Api::ReviewsController < ApplicationController

    def create
        @review = Review.new(review_params)
        debugger
        if @review.save
            render :show
        else
            render json: @review.errors.full_messages, status: 422
        end
    end

    def update
        @review = Review.find_by(user_id: review_params[:user_id], product_id: review_params[:product_id])
        if @review.update_attributes(review_params)
            render :show
        else
            render json: @review.errors.full_messages, status: 422
        end
    end

    def destroy
        @review = Review.find(params[:id])
        if @review.destroy
            render :show
        else 
            render json: @review.errors.full_messages, status: 422
        end
    end

    private
    def review_params
        snackcase_params
        params.require(:review).permit(:rating, :body, :product_id, :user_id)
    end

    def snackcase_params
        params[:review] = params[:review].transform_keys(&:underscore)
    end
end