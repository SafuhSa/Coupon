json.extract! user, :id, :username, :full_name

json.cart do
  if user.cart
    json.extract! user.cart, :id
  end
end