class Api::CartsController < ApplicationController

  def show
    @cart = Cart.find(params[:id])
  end


  # def create
  #   @cart = Cart.new()
  # end


  # def cart_params
  #   params.require(:cart)
  # end
end