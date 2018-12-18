class Api::ProductsController < ApplicationController
# before_action :snackcase_params
  def index
    @products = Product.all
  end

  def show
    @product = Product.find(params[:id])
  end

  def create
    @product = Product.new(product_params)
    @product.seller_id = current_user.id
    if @product.save
      render :show
    else
      render json: @product.errors.full_messages, status: 422
    end
  end

  def update
    @product = Product.find_by(id: params[:id])
    if @product.update(product_params)
      render :show
    else
      render json: @product.errors.full_messages, status: 422
    end
  end

  def destroy
    @product = Product.find(params[:id])
    @product.destroy

    render :show
  end

  private

  def product_params
    snackcase_params
    params.require(:product).permit(:product_name, :price, :dis_price, :description, :quantity, :category, photos: [])
  end

  def snackcase_params
    params[:product] = params[:product].transform_keys(&:underscore)
  end

end