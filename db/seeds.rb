# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

#  product1 = Product.new(title: 'Talk To me', artist_id: artist1.id)
#  file = Ezxudio.attach(io: file, filename: '02_Talk_to_Me.mp3')
#  track2.save!
BoughtItem.destroy_all
Cart.destroy_all
Product.destroy_all
RecentView.destroy_all
User.destroy_all



user = User.create(username: 'SafuhSa', password: "password", email:'email@email.com', full_name: "Safuh Saray")

product1 = Product.new(product_name: "John's Incredible Pizza Company", price: 73, dis_price: 26, city: 'Los Angeles', description: 'Visitors can enjoy unlimited food and drinks along with video games and rides like the boogie bump, Air IncrediBear, and more', quantity: 1000, category: 'Entertainment', seller_id: user.id)
# https://s3-us-west-1.amazonaws.com/coupon-div/Los+Angeles/PizzaCompany1.jpg
file = EzDownload.open('https://s3-us-west-1.amazonaws.com/coupon-div/Los+Angeles/PizzaCompany1.jpg')
product1.photos.attach(io: file, filename: 'PizzaCompany1.jpg')
file1 = EzDownload.open('https://s3-us-west-1.amazonaws.com/coupon-div/Los+Angeles/Pizza+Company2.jpg')
product1.photos.attach(io: file1, filename: 'Pizza+Company2.jpg')
file3 = EzDownload.open('https://s3-us-west-1.amazonaws.com/coupon-div/Los+Angeles/PizzaCompany3.jpg')
product1.photos.attach(io: file3, filename: 'PizzaCompany3.jpg')
file4 = EzDownload.open('https://s3-us-west-1.amazonaws.com/coupon-div/Los+Angeles/PizzaCompany4.jpg')
product1.photos.attach(io: file4, filename: 'PizzaCompany4.jpg')
product1.save!



product2 = Product.new(product_name: 'Indigo Grill', price: 50, dis_price: 25, city: 'Los Angeles', description: 'Indigo Grill - Little Italy’s Modern Latin restaurant - Diners enjoy modern spins on Latin food such as ceviche, tortilla soup, or tlayuda', quantity: 510, category: 'Restaurants', seller_id: user.id)
file5 = EzDownload.open('https://s3-us-west-1.amazonaws.com/coupon-div/Los+Angeles/IndigoGrill.jpg')
product2.photos.attach(io: file5, filename: 'IndigoGrill.jpg')
file6 = EzDownload.open('https://s3-us-west-1.amazonaws.com/coupon-div/Los+Angeles/IndigoGrill2.jpg')
product2.photos.attach(io: file6, filename: 'IndigoGrill2.jpg')
file7 = EzDownload.open('https://s3-us-west-1.amazonaws.com/coupon-div/Los+Angeles/IndigoGrill3.jpg')
product2.photos.attach(io: file7, filename: 'IndigoGrill3.jpg')
file8 = EzDownload.open('https://s3-us-west-1.amazonaws.com/coupon-div/Los+Angeles/IndigoGrill4.jpg')
product2.photos.attach(io: file8, filename: 'IndigoGrill4.jpg')
product2.save!




product3 = Product.new(product_name: 'P2K Range', price: 65, dis_price: 41, city: 'Los Angeles', description: 'Shooting-range package includes rental handguns and hands-on assistance while on range', quantity: 10000, category: 'Entertainment', seller_id: user.id)
file9 = EzDownload.open('https://s3-us-west-1.amazonaws.com/coupon-div/Los+Angeles/P2KRange.jpg')
product3.photos.attach(io: file9, filename: 'P2KRange.jpg')
product3.save!


product4 = Product.new(product_name: 'Spa Package at Eforea Spa at Hilton Bayfront (Up to 45% Off)', price: 145, dis_price: 99, city: 'Los Angeles', description: 'Spend time luxuriating in the heated saline pool, hot tubs, and steam rooms before a massage and mani-pedi', quantity: 1000, category: 'Entertainment', seller_id: user.id)
file11 = EzDownload.open('https://s3-us-west-1.amazonaws.com/coupon-div/Los+Angeles/SpaatHilton.jpg')
product4.photos.attach(io: file11, filename: 'SpaatHilton.jpg')
file12 = EzDownload.open('https://s3-us-west-1.amazonaws.com/coupon-div/Los+Angeles/SpaatHilton2.jpg')
product4.photos.attach(io: file12, filename: 'SpaatHilton2.jpg')
product4.save!


product5 = Product.new(product_name: 'Sugar Factory Theatre Box', price: 215, dis_price: 99, city: 'Los Angeles', description: 'Newly-opened movie theater invites movie buffs to watch the latest flicks while snacking on popcorn and candy', quantity: 50, category: 'Restaurants', seller_id: user.id)
file13 = EzDownload.open('https://s3-us-west-1.amazonaws.com/coupon-div/Los+Angeles/FactoryTheatre.jpg')
product5.photos.attach(io: file13, filename: 'FactoryTheatre.jpg')
file14 = EzDownload.open('https://s3-us-west-1.amazonaws.com/coupon-div/Los+Angeles/FactoryTheatre1.jpg')
product5.photos.attach(io: file14, filename: 'FactoryTheatre1.jpg')
file15 = EzDownload.open('https://s3-us-west-1.amazonaws.com/coupon-div/Los+Angeles/FactoryTheatre2.jpg')
product5.photos.attach(io: file15, filename: 'FactoryTheatre2.jpg')
product5.save!

product6 = Product.new(product_name: 'SolarChimps', price: 500, dis_price: 225, city: 'Los Angeles', description: 'Local businesses like this one promote thriving, distinctive communities by offering a rich array of goods and services to locals like you', quantity: 50, category: 'Electronics', seller_id: user.id)
file15 = EzDownload.open('https://s3-us-west-1.amazonaws.com/coupon-div/Los+Angeles/SolarChimps.jpg')
product6.photos.attach(io: file15, filename: 'SolarChimps.jpg')
product6.save!

product7 = Product.new(product_name: 'La Jolla Water Sports', price: 69, dis_price: 43, city: 'Los Angeles', description: 'A professional diving instructor guides the customers through the exciting experience of diving and catching lobsters', quantity: 2000, category: 'Entertainment', seller_id: user.id)
file16 = EzDownload.open('https://s3-us-west-1.amazonaws.com/coupon-div/Los+Angeles/LaJollaWaterSports.jpg')
product7.photos.attach(io: file16, filename: 'LaJollaWaterSports.jpg')
product7.save!


product8 = Product.new(product_name: 'Thai Diamond Day Spa', price: 65, dis_price: 38,city: 'Los Angeles', description: 'Massage with oil of the client’s choice is customized to fit their needs and preferences and can alleviate pain and reduce stress', quantity: 450, category: 'Entertainment', seller_id: user.id)
file17 = EzDownload.open('https://s3-us-west-1.amazonaws.com/coupon-div/Los+Angeles/ThaiDiamondDaySpa.jpg')
product8.photos.attach(io: file17, filename: 'ThaiDiamondDaySpa.jpg')
product8.save!

product9 = Product.new(product_name: "Women's Floral or Camo Hoodie with Drawstrings", price: 50, dis_price: 20,city: 'Los Angeles', description: 'Pair this hoodie with boyfriend jeans, low-top sneakers, and an oversize bag to create a relaxed yet chic look great for running errands', quantity: 2000, category: 'clothing', seller_id: user.id)
file18 = EzDownload.open("https://s3-us-west-1.amazonaws.com/coupon-div/Los+Angeles/Women'sFloralorHoodie.jpg")
product9.photos.attach(io: file18, filename: "Women'sFloralorHoodie.jpg")
file19 = EzDownload.open("https://s3-us-west-1.amazonaws.com/coupon-div/Los+Angeles/Women'sFloralorHoodie1.jpg")
product9.photos.attach(io: file19, filename: "Women'sFloralorHoodie1.jpg")
product9.save!

product10 = Product.new(product_name: "Skydive Monterey Bay", price: 409, dis_price: 289,city: 'San Francisco', description: 'Jump from 18,000 feet and enjoy a thrilling 90-second freefall while attached to an instructor; VIPs receive priority boarding and diploma', quantity: 100, category: 'Entertainment', seller_id: user.id)
file20 = EzDownload.open("https://s3-us-west-1.amazonaws.com/coupon-div/San+Francisco/skydiveMontereyBay.jpg")
product10.photos.attach(io: file20, filename: "skydiveMontereyBay.jpg")
file21 = EzDownload.open("https://s3-us-west-1.amazonaws.com/coupon-div/San+Francisco/skydiveMontereyBay1.jpg")
product10.photos.attach(io: file21, filename: "skydiveMontereyBay1.jpg")
file22 = EzDownload.open("https://s3-us-west-1.amazonaws.com/coupon-div/San+Francisco/skydiveMontereyBay2.jpg")
product10.photos.attach(io: file22, filename: "skydiveMontereyBay2.jpg")
product10.save!



product11 = Product.new(product_name: "Blazing Saddles", price: 72, dis_price: 36,city: 'San Francisco', description: 'Deluxe rental bikes whisk riders away on self-guided or guided tours of San Francisco, the Bay, and surrounding landmarks', quantity: 1070, category: 'Entertainment', seller_id: user.id)
file23 = EzDownload.open("https://s3-us-west-1.amazonaws.com/coupon-div/San+Francisco/BlazingSaddles.jpg")
product11.photos.attach(io: file23, filename: "BlazingSaddles.jpg")
product11.save!

product12 = Product.new(product_name: "Beats by Dr. Dre urBeats 2 In-Ear Headphones", price: 89, dis_price: 49,city: 'San Francisco', description: 'In-ear headphones isolate ambient noise from your favorite tunes, while an in-line remote lets you adjust playback on the go', quantity: 4000, category: 'Electronics', seller_id: user.id)
file24 = EzDownload.open("https://s3-us-west-1.amazonaws.com/coupon-div/San+Francisco/BeatsEarHeadphones.jpg")
product12.photos.attach(io: file24, filename: "BeatsEarHeadphones.jpg")
file25 = EzDownload.open("https://s3-us-west-1.amazonaws.com/coupon-div/San+Francisco/BeatsEarHeadphones1.jpg")
product12.photos.attach(io: file25, filename: "BeatsEarHeadphones1.jpg")
product12.save!

product13 = Product.new(product_name: "TechComm Voyager 4K Waterproof Action Camera Bundle", price: 99, dis_price: 31,city: 'San Francisco', description: 'Waterproof action camera with high-resolution photo and video from a fish-eye lens with wide-angle views', quantity: 1000, category: 'Electronics', seller_id: user.id)
file26 = EzDownload.open("https://s3-us-west-1.amazonaws.com/coupon-div/San+Francisco/TechCommVoyager.jpg")
product13.photos.attach(io: file26, filename: "TechCommVoyager.jpg")
file27 = EzDownload.open("https://s3-us-west-1.amazonaws.com/coupon-div/San+Francisco/TechCommVoyager1.jpg")
product13.photos.attach(io: file27, filename: "TechCommVoyager1.jpg")
file28 = EzDownload.open("https://s3-us-west-1.amazonaws.com/coupon-div/San+Francisco/TechCommVoyager2.jpg")
product13.photos.attach(io: file28, filename: "TechCommVoyager2.jpg")
product13.save!

product14 = Product.new(product_name: "Papa John's", price: 50, dis_price: 25,city: 'San Francisco', description: 'Have a pizza night with your favorite Papa John’s pie, made using high-protein flour and fresh produce', quantity: 1000, category: 'Restaurants', seller_id: user.id)
file29 = EzDownload.open("https://s3-us-west-1.amazonaws.com/coupon-div/San+Francisco/PapaJohn's.jpg")
product14.photos.attach(io: file29, filename: "PapaJohn's.jpg")
product14.save!

product15 = Product.new(product_name: "Fish & Farm", price: 100, dis_price: 75,city: 'San Francisco', description: 'At locations in the Mark Twain Hotel and Financial District, Fish & Farm serves sustainably caught roasted salmon, New York steak, and more', quantity: 800, category: 'Restaurants', seller_id: user.id)
file30 = EzDownload.open("https://s3-us-west-1.amazonaws.com/coupon-div/San+Francisco/Fish%26Farm.jpg")
product15.photos.attach(io: file30, filename: "Fish&Farm.jpg")
file31 = EzDownload.open("https://s3-us-west-1.amazonaws.com/coupon-div/San+Francisco/Fish%26Farm1.jpg")
product15.photos.attach(io: file31, filename: "Fish&Farm1.jpg")
file32 = EzDownload.open("https://s3-us-west-1.amazonaws.com/coupon-div/San+Francisco/Fish%26Farm2.jpg")
product15.photos.attach(io: file32, filename: "Fish&Farm2.jpg")
product15.save!

product16 = Product.new(product_name: "Fly Bar", price: 100, dis_price: 75,city: 'San Francisco', description: 'Modern restaurant and bar serves high quality pub & food, such as pizzas and turkey sandwiches, as well as a wide selection of craft beers', quantity: 530, category: 'Restaurants', seller_id: user.id)
file33 = EzDownload.open("https://s3-us-west-1.amazonaws.com/coupon-div/San+Francisco/FlyBar.jpg")
product16.photos.attach(io: file33, filename: "FlyBar.jpg")
product16.save!

product17 = Product.new(product_name: "Men's Funny T-Shirt", price: 20, dis_price: 14,city: 'San Francisco', description: 'This tee featuring funny designs from Crazy Dog can be paired with jeans, your favorite sneakers and baseball hat to create a laid-back look', quantity: 5000, category: 'clothing', seller_id: user.id)
file34 = EzDownload.open("https://s3-us-west-1.amazonaws.com/coupon-div/San+Francisco/Men'sFunnyT-Shirt.jpg")
product17.photos.attach(io: file34, filename: "Men'sFunnyT-Shirt.jpg")
file35 = EzDownload.open("https://s3-us-west-1.amazonaws.com/coupon-div/San+Francisco/Men'sFunnyT-Shirt1.jpg")
product17.photos.attach(io: file35, filename: "Men'sFunnyT-Shirt1.jpg")
product17.save!

product18 = Product.new(product_name: "Women's Knee-Length Hacci Cardigan", price: 70, dis_price: 20,city: 'San Francisco', description: 'Made of hacci-knit fabric, this knee-length cardigan featuring long sleeves offers comfort and warmth', quantity: 5000, category: 'clothing', seller_id: user.id)
file36 = EzDownload.open("https://s3-us-west-1.amazonaws.com/coupon-div/San+Francisco/Women'sKnee-LengthHacciCardigan.jpg")
product18.photos.attach(io: file36, filename: "Women'sKnee-LengthHacciCardigan.jpg")
file37 = EzDownload.open("https://s3-us-west-1.amazonaws.com/coupon-div/San+Francisco/Women'sKnee-LengthHacciCardigan1.jpg")
product18.photos.attach(io: file37, filename: "Women'sKnee-LengthHacciCardigan1.jpg")
product18.save!

product19 = Product.new(product_name: "Hit Fit SF", price: 125, dis_price: 40,city: 'San Francisco', description: 'Certified trainers fuse boxing techniques with TRX suspension training to create high intensity workouts', quantity: 1000, category: 'Entertainment', seller_id: user.id)
file38 = EzDownload.open("https://s3-us-west-1.amazonaws.com/coupon-div/San+Francisco/HitFit.jpg")
product19.photos.attach(io: file38, filename: "HitFit.jpg")
file39 = EzDownload.open("https://s3-us-west-1.amazonaws.com/coupon-div/San+Francisco/HitFit1.jpg")
product19.photos.attach(io: file39, filename: "HitFit1.jpg")
file40 = EzDownload.open("https://s3-us-west-1.amazonaws.com/coupon-div/San+Francisco/HitFit2.jpg")
product19.photos.attach(io: file40, filename: "HitFit2.jpg")
product19.save!





# product1 = Product.new(product_name: '', price: '', dis_price: '', description: '', quantity: '', category: '', seller_id: user.id)
# file = EzDownload.open('https://s3-us-west-1.amazonaws.com/coupon-div/PizzaCompany1.jpg')
# product1.photos.attach(io: file, filename: 'PizzaCompany1.jpg')
# file = EzDownload.open('')
# product1.photos.attach(io: file, filename: 'PizzaCompany1.jpg')
# product1.save!

# product1 = Product.new(product_name: '', price: '', dis_price: '', description: '', quantity: '', category: '', seller_id: user.id)
# file = EzDownload.open('https://s3-us-west-1.amazonaws.com/coupon-div/PizzaCompany1.jpg')
# product1.photos.attach(io: file, filename: 'PizzaCompany1.jpg')
# file = EzDownload.open('')
# product1.photos.attach(io: file, filename: 'PizzaCompany1.jpg')
# product1.save!