# require "net/http"
# require 'IPinfo'
class Api::LocationsController < ApplicationController

  def create
    ip_address = Net::HTTP.get(URI("https://api.ipify.org"))
    # access_token = '8ad192f4b825fa'
    # handler = IPinfo::create(access_token)
    

    location = Geocoder.search(request.env['REMOTE_ADDR'])

    innerhash = location[0].data

    country = innerhash["country_name"]
    state = innerhash["region_name"]
    @city = innerhash["city"]
    @loc = innerhash["loc"]
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
end

# request.env['REMOTE_ADDR']