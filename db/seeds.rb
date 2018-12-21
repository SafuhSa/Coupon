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
Product.destroy_all
User.destroy_all

user = User.create(username: 'SafuhSa', password: "password", email:'email@email.com', full_name: "Safuh Saray")

product1 = Product.new(product_name: "John's Incredible Pizza Company", price: 73, dis_price: 26, description: 'Visitors can enjoy unlimited food and drinks along with video games and rides like the boogie bump, Air IncrediBear, and more', quantity: 1000, category: 'Entertainment', seller_id: user.id)
file = EzDownload.open('https://s3-us-west-1.amazonaws.com/coupon-div/PizzaCompany1.jpg')
product1.photos.attach(io: file, filename: 'PizzaCompany1.jpg')
file1 = EzDownload.open('https://s3-us-west-1.amazonaws.com/coupon-div/Pizza+Company2.jpg')
product1.photos.attach(io: file1, filename: 'Pizza+Company2.jpg')
file3 = EzDownload.open('https://s3-us-west-1.amazonaws.com/coupon-div/PizzaCompany3.jpg')
product1.photos.attach(io: file3, filename: 'PizzaCompany3.jpg')
file4 = EzDownload.open('https://s3-us-west-1.amazonaws.com/coupon-div/PizzaCompany4.jpg')
product1.photos.attach(io: file4, filename: 'PizzaCompany4.jpg')
product1.save!



product2 = Product.new(product_name: 'Indigo Grill', price: 50, dis_price: 25, description: 'Indigo Grill - Little Italy’s Modern Latin restaurant - Diners enjoy modern spins on Latin food such as ceviche, tortilla soup, or tlayuda', quantity: 510, category: 'Restaurants', seller_id: user.id)
file5 = EzDownload.open('https://s3-us-west-1.amazonaws.com/coupon-div/IndigoGrill.jpg')
product2.photos.attach(io: file5, filename: 'IndigoGrill.jpg')
file6 = EzDownload.open('https://s3-us-west-1.amazonaws.com/coupon-div/IndigoGrill2.jpg')
product2.photos.attach(io: file6, filename: 'IndigoGrill2.jpg')
file7 = EzDownload.open('https://s3-us-west-1.amazonaws.com/coupon-div/IndigoGrill3.jpg')
product2.photos.attach(io: file7, filename: 'IndigoGrill3.jpg')
file8 = EzDownload.open('https://s3-us-west-1.amazonaws.com/coupon-div/IndigoGrill4.jpg')
product2.photos.attach(io: file8, filename: 'IndigoGrill4.jpg')
product2.save!




product3 = Product.new(product_name: 'P2K Range', price: 65, dis_price: 41, description: 'Shooting-range package includes rental handguns and hands-on assistance while on range', quantity: 10000, category: 'Entertainment', seller_id: user.id)
file9 = EzDownload.open('https://s3-us-west-1.amazonaws.com/coupon-div/P2KRange.jpg')
product3.photos.attach(io: file9, filename: 'P2KRange.jpg')
product3.save!


product4 = Product.new(product_name: 'Spa Package at Eforea Spa at Hilton Bayfront (Up to 45% Off)', price: 145, dis_price: 99, description: 'Spend time luxuriating in the heated saline pool, hot tubs, and steam rooms before a massage and mani-pedi', quantity: 1000, category: 'Entertainment', seller_id: user.id)
file11 = EzDownload.open('https://s3-us-west-1.amazonaws.com/coupon-div/SpaatHilton.jpg')
product4.photos.attach(io: file11, filename: 'SpaatHilton.jpg')
file12 = EzDownload.open('https://s3-us-west-1.amazonaws.com/coupon-div/SpaatHilton2.jpg')
product4.photos.attach(io: file12, filename: 'SpaatHilton2.jpg')
product4.save!


product5 = Product.new(product_name: 'Sugar Factory Theatre Box', price: 215, dis_price: 99, description: 'Newly-opened movie theater invites movie buffs to watch the latest flicks while snacking on popcorn and candy', quantity: 50, category: 'Restaurants', seller_id: user.id)
file13 = EzDownload.open('https://s3-us-west-1.amazonaws.com/coupon-div/FactoryTheatre.jpg')
product5.photos.attach(io: file13, filename: 'FactoryTheatre.jpg')
file14 = EzDownload.open('https://s3-us-west-1.amazonaws.com/coupon-div/FactoryTheatre1.jpg')
product5.photos.attach(io: file14, filename: 'FactoryTheatre1.jpg')
file15 = EzDownload.open('https://s3-us-west-1.amazonaws.com/coupon-div/FactoryTheatre2.jpg')
product5.photos.attach(io: file15, filename: 'FactoryTheatre2.jpg')
product5.save!

product6 = Product.new(product_name: 'SolarChimps', price: 500, dis_price: 225, description: 'Local businesses like this one promote thriving, distinctive communities by offering a rich array of goods and services to locals like you', quantity: 50, category: 'Electronics', seller_id: user.id)
file15 = EzDownload.open('https://s3-us-west-1.amazonaws.com/coupon-div/SolarChimps.jpg')
product6.photos.attach(io: file15, filename: 'SolarChimps.jpg')
product6.save!

product7 = Product.new(product_name: 'La Jolla Water Sports', price: 69, dis_price: 43, description: 'A professional diving instructor guides the customers through the exciting experience of diving and catching lobsters', quantity: 2000, category: 'Entertainment', seller_id: user.id)
file16 = EzDownload.open('https://s3-us-west-1.amazonaws.com/coupon-div/LaJollaWaterSports.jpg')
product7.photos.attach(io: file16, filename: 'LaJollaWaterSports.jpg')
product7.save!


product8 = Product.new(product_name: 'Thai Diamond Day Spa', price: 65, dis_price: 38, description: 'Massage with oil of the client’s choice is customized to fit their needs and preferences and can alleviate pain and reduce stress', quantity: 450, category: 'Entertainment', seller_id: user.id)
file17 = EzDownload.open('https://s3-us-west-1.amazonaws.com/coupon-div/ThaiDiamondDaySpa.jpg')
product8.photos.attach(io: file17, filename: 'ThaiDiamondDaySpa.jpg')
product8.save!

product9 = Product.new(product_name: "Women's Floral or Camo Hoodie with Drawstrings", price: 50, dis_price: 20, description: 'Pair this hoodie with boyfriend jeans, low-top sneakers, and an oversize bag to create a relaxed yet chic look great for running errands', quantity: 2000, category: 'clothing', seller_id: user.id)
file18 = EzDownload.open("https://s3-us-west-1.amazonaws.com/coupon-div/Women'sFloralorHoodie.jpg")
product9.photos.attach(io: file18, filename: "Women'sFloralorHoodie.jpg")
file19 = EzDownload.open("https://s3-us-west-1.amazonaws.com/coupon-div/Women'sFloralorHoodie1.jpg")
product9.photos.attach(io: file19, filename: "Women'sFloralorHoodie1.jpg")
product9.save!

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