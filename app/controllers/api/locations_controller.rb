require "net/http"
require 'IPinfo';
class Api::LocationsController < ApplicationController

  def show
    access_token = '8ad192f4b825fa'
    handler = IPinfo::create(access_token)
    ip_address = Net::HTTP.get(URI("https://api.ipify.org"))

    details = handler.details(ip_address)
    city = details.city # Emeryville
    loc = details.loc # 37.8342,-122.2900
    
    
    @products = Product.all
    render "api/products/index"
  end
end
