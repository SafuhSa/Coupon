// GET / api / products /: id - returns product
// POST / api / products - creates a product
// PATCH / api / products /: id - edit a product
// DELETE / api / products /: id - remove a product

export const fetchProducts = () => (
  $.ajax({
    method: 'GET',
    url: 'api/products'
  })
);

export const fetchProduct = (id) => {
  return $.ajax({
    method: 'GET',
    url: `api/products/${id}`
  })
};

export const createProduct = (formData) => (
  $.ajax({
    method: 'POST',
    url: 'api/products',
    data: formData,
    contentType: false,
    processData: false
  })
);

export const updateProduct = (formData, productId) => {
  return $.ajax({
    method: 'PATCH',
    url: `api/products/${productId}`,
    data: formData,
    contentType: false,
    processData: false
  })
};

export const deletePorduct = (id) => (
  $.ajax({
    method: 'DELETE',
    url: `api/products/${id}`
  })
);




export const boughtItem = (boughtItem) => {
  return (
  $.ajax({
    method: 'POST',
    url: 'api/boughtitems',
    data: { boughtItem }
  })
  )
};

export const deleteBoughtItem = (id) => (
  $.ajax({
    method: 'DELETE',
    url: `api/boughtitems/${id}`
  })
);

export const fetchCart = (id) => {
  return $.ajax({
    method: 'GET',
    url: `api/carts/${id}`
  })
};