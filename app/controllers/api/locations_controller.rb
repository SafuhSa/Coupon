# require "net/http"
# require 'IPinfo'
class Api::LocationsController < ApplicationController

  def create
    access_token = '8ad192f4b825fa'
    handler = IPinfo::create(access_token)
    ip_address = Net::HTTP.get(URI("https://api.ipify.org"))

    details = handler.details(ip_address)
    @city = details.city # Emeryville
    @loc = details.loc # 37.8342,-122.2900
    render "api/location/show"
  end

  # def show
  #   @location = session[:location]
  #   render 'api/location/show'
  # end
end
