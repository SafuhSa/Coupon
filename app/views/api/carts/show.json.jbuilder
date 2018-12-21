json.cart do 
  json.extract! @cart, :id, :buyer_id, :purchase_total, :product_ids
end

json.bought_items do
  @cart.products.each do |bought_item|
    json.set! bought_item.id do
      json.extract! bought_item, :id, :product_id, :quantity, :cart_id

      if bought_item.product.photos.attached?
        json.photoUrl url_for(bought_item.product.photos[0])
      end
    end
  end
end



