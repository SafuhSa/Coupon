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
  
  # "38.0135809,-121.9392138,saf"
  # 37.7811° N, 122.4115° W
  # 37.7749° N, 122.4194° W san frans
  # 37.3382° N, 121.8863° W san jose
  

  # 34.0522° N, 118.2437° W LA
  # 32.7157° N, 117.1611° W SD
  
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
