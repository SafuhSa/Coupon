# require "net/http"
# require 'IPinfo'
class Api::LocationsController < ApplicationController
  def create
    latitude = location_params[:latitude]
    longitude = location_params[:longitude]
    results = Geocoder.search([latitude, longitude])
    
    @city = results.first.city
    @loc = [latitude, longitude, 'saf']
    
    render "api/location/show"
  end
  
  def location_params
    params.require(:location).permit(:latitude, :longitude)
  end
end



# request.env['REMOTE_ADDR']
# ip_address = Net::HTTP.get(URI("https://api.ipify.org"))
# access_token = '8ad192f4b825fa'
# handler = IPinfo::create(access_token)

# location = Geocoder.search(ip_address)

# innerhash = location[0].data

# country = innerhash["country_name"]
# state = innerhash["region_name"]
# @city = innerhash["city"]
# @loc = innerhash["loc"]
# zipcode = geoloc["zipcode"]
# latitude = geoloc["latitude"]
# longitude = geoloc["longitude"]
# area_code = geoloc["area_code"]
