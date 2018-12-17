@products.each do |product|
  json.set! product.id do
    json.extract! product, :id, :product_name, :price, :dis_price, :description, :quantity, :category, :seller_id
  end
end
