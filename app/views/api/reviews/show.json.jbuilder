json.extract! @review, :id, :body, :rating
json.author @review.author.full_name