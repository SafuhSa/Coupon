class Api::BoughtitemsController < ApplicationController

  def create
    @bought_item = BoughtItem.new(bought_item_params)
    product = Product.find_by(id: @bought_item.product_id)
  
    total = @bought_item.quantity * product.dis_price

    if current_user.cart
      @cart = current_user.cart
      @cart.purchase_total += total

      @cart.products.each do |already_exist_item| 
        if already_exist_item.product_id == @bought_item.product_id
          already_exist_item.quantity += @bought_item.quantity
          @bought_item = already_exist_item
        end
      end

    else
      @cart = Cart.new({ buyer_id: current_user.id, purchase_total: total })
    end

    
    @cart.save
    @bought_item.cart_id = @cart.id

    if @bought_item.save

      render "api/carts/show"
    else
      render json: @bought_item.errors.full_messages, status: 422
    end

  end


  def destroy
    @bought_item = BoughtItem.find(params[:id])
    item = Product.find_by(id: @bought_item.product_id)
    total = @bought_item.quantity * item.dis_price
    @cart = Cart.find_by(id: @bought_item.cart_id)
    @cart.purchase_total -= total
    @cart.save
    
    if @cart.purchase_total.zero? 
      @bought_item.destroy
      @cart.destroy
      @products = Product.all
      render 'api/products/index'
    else
      @bought_item.destroy
      render "api/carts/show"
    end
  end


  def bought_item_params
    snackcase_params
    params.require(:boughtItem).permit(:product_id, :quantity, :cart_id)
  end

    def snackcase_params
    params[:boughtItem] = params[:boughtItem].transform_keys(&:underscore)
  end
end
