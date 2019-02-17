json.extract! @review, :id, :body, :rating, :product_id, :user_id
json.author @review.author.full_name