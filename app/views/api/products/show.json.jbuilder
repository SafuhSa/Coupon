json.extract! @product, :id, :product_name, :price, :dis_price, :description, :quantity, :category, :seller_id
if @product.photos.attached?
    json.photoUrls @product.photos.map { |file| url_for(file) }
  end

json.reviews @product.reviews.each do |review|
  json.set! review.id do
    json.extract! review, :id, :body, :rating

    json.userName review.author.full_name
  end
end