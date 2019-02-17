@products.each do |product|
  json.set! product.id do
    json.extract! product, :id, :product_name, :city, :price, :dis_price, :description, :quantity, :category, :seller_id

    if product.photos.attached?
      json.photoUrls product.photos.map { |file| url_for(file) }
    end

    json.reviews product.reviews.each do |review|
      json.extract! review, :id, :body, :rating
      json.author review.author.full_name
    end
  end
end

