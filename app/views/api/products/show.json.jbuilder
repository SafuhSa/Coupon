json.extract! @product, :id, :product_name, :price, :dis_price, :description, :quantity, :category, :seller_id
if @product.photos.attached?
    json.photoUrls @product.photos.map { |file| url_for(file) }
  end

  json.reviews @product.reviews.each do |review|
      json.extract! review, :id, :body, :rating, :user_id
      json.author review.author.full_name
  end