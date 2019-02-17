json.extract! @review, :id, :body, :rating, :product_id
json.author @review.author.full_name