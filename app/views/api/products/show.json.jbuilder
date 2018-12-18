json.extract! @product, :id, :product_name, :price, :dis_price, :description, :quantity, :category, :seller_id
if @product.photo.attached?
    json.photoUrl url_for(@product.photo)
  end