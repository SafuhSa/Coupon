@products.each do |product|
  json.set! product.id do
    json.extract! product, :id, :product_name, :price, :dis_price, :description, :quantity, :category, :seller_id

    if product.photos.attached?
      json.photoUrls product.photos.map { |file| url_for(file) }
    end
  end
end

