class Api::BoughtItemsController < ApplicationController

  def create
    @bought_item = BoughtItem.new(bought_item_params)
    product = Product.find_by(id: @bought_item.product_id)

    total = @bought_item.quantity * product.price

    if params[:bought_item][:cart_id]
      @cart = Cart.find_by(id: @bought_item.cart_id)
      @cart.purchase_total += total
      @cart.save
    else
      @cart = Cart.new({ buyer_id: current_user.id, purchase_total: total })
      @cart.save
      @bought_item.cart_id = @cart.id
    end

   
    if @bought_item.save
      render "api/carts/show"
    else
      render json: @product.errors.full_messages, status: 422
    end
  end


  def destroy
    @bought_item = BoughtItem.find(params[:id])
    price = Product.find_by(id: @bought_item.product_id)
    total = @bought_item.quantity * price
    cart = Cart.find_by(id: @bought_item.cart_id)
    cart.purchase_total -= total
    cart.update(cart)

    @bought_item.destroy
    render "api/carts/show"
  end


  def bought_item_params()
    params.require(:bought_item).permit(:product_id, :quantity, :cart_id)
  end
end

# params.require(:user).permit(:username, :password, :email, :full_name)