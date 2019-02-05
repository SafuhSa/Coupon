# require "net/http"
# require 'IPinfo'
class Api::LocationsController < ApplicationController

  def create

    # ip_address = Net::HTTP.get(URI("https://api.ipify.org"))
    # access_token = '8ad192f4b825fa'
    # handler = IPinfo::create(access_token)
    latitude = location_params[:latitude]
    longitude = location_params[:longitude]
    results = Geocoder.search([latitude, longitude])
    

    debugger
    # location = Geocoder.search(ip_address)
    @city = results.first.city
    @loc = [latitude, longitude, 'saf']
    
    # innerhash = location[0].data

    # country = innerhash["country_name"]
    # state = innerhash["region_name"]
    # @city = innerhash["city"]
    # @loc = innerhash["loc"]
    # zipcode = geoloc["zipcode"]
    # latitude = geoloc["latitude"]
    # longitude = geoloc["longitude"]
    # area_code = geoloc["area_code"]

    

    # details = handler.details(ip_address)
    # @city = details.city # Emeryville
    # @loc = details.loc # 37.8342,-122.2900

    render "api/location/show"
  end

  # def show
  #   @location = session[:location]
  #   render 'api/location/show'
  # end

  def location_params
    params.require(:location).permit(:latitude, :longitude)
  end
end

# request.env['REMOTE_ADDR']