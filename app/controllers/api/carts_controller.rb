class Api::CartsController < ApplicationController

  def show
    @cart = Cart.find(params[:id])
  end

end