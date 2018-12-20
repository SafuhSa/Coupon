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

product1 = Product.new(product_name: "John's Incredible Pizza Company", price: 73, dis_price: 26, description: 'Visitors can enjoy unlimited food and drinks along with video games and rides like the boogie bump, Air IncrediBear, and more', quantity: 1000, category: 'Restaurants', seller_id: user.id)
file = EzDownload.open('https://s3-us-west-1.amazonaws.com/coupon-div/PizzaCompany1.jpg')
product1.photos.attach(io: file, filename: 'PizzaCompany1.jpg')
file1 = EzDownload.open('https://s3-us-west-1.amazonaws.com/coupon-div/Pizza+Company2.jpg')
product1.photos.attach(io: file1, filename: 'Pizza+Company2.jpg')
file3 = EzDownload.open('https://s3-us-west-1.amazonaws.com/coupon-div/PizzaCompany3.jpg')
product1.photos.attach(io: file3, filename: 'PizzaCompany3.jpg')
file4 = EzDownload.open('https://s3-us-west-1.amazonaws.com/coupon-div/PizzaCompany4.jpg')
product1.photos.attach(io: file4, filename: 'PizzaCompany4.jpg')
product1.save!



# product1 = Product.new(product_name: 'Indigo Grill', price: 50, dis_price: 25, description: 'Indigo Grill - Little Italy’s Modern Latin restaurant - Diners enjoy modern spins on Latin food such as ceviche, tortilla soup, or tlayuda', quantity: 510, category: 'Restaurants', seller_id: 4)
# file = EzDownload.open('')
# product1.photos.attach(io: file, filename: '')
# product1.save!




# product1 = Product.new(product_name: '', price: '', dis_price: '', description: '', quantity: '', category: '', seller_id: 4)
# file = EzDownload.open('https://s3-us-west-1.amazonaws.com/coupon-div/PizzaCompany1.jpg')
# product1.photos.attach(io: file, filename: 'PizzaCompany1.jpg')
# product1.save!