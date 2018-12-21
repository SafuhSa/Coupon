json.cart do 
  json.extract! @cart, :id, :buyer_id, :purchase_total, :product_ids
end

json.bought_items do
  @cart.products.each do |bought_item|
    json.set! bought_item.id do
      json.extract! bought_item, :id, :product_id, :quantity, :cart_id
      json.product_name bought_item.product.product_name
      json.price  bought_item.product.price
      json.dis_price  bought_item.product.dis_price
      json.description  bought_item.product.description

      if bought_item.product.photos.attached?
        json.photoUrls bought_item.product.photos.map { |file| url_for(file) }
      end
    end
  end
end


