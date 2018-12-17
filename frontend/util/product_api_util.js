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

export const createProduct = (product) => (
  $.ajax({
    method: 'POST',
    url: 'api/products',
    data: { product }
  })
);

export const updateProduct = (product) => {
  
  return $.ajax({
    method: 'PATCH',
    url: `api/products/${product.id}`,
    data: { product }
  })
};

export const deletePorduct = (id) => (
  $.ajax({
    method: 'DELETE',
    url: `api/products/${id}`
  })
);

