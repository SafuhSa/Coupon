class Api::CartsController < ApplicationController

  def show

    if current_user.cart
      id = current_user.cart.id
      @cart = Cart.find(id)
      @cart.reload
    else
      @cart = Cart.new({ buyer_id: current_user.id, purchase_total: 0 })
      @cart.save
    end
  end

end