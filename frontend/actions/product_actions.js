import * as ProductAPIUtil from '../util/product_api_util';

export const RECEIVE_PRODUCTS = "RECEIVE_PRODUCTS";
export const RECEIVE_PRODUCT = "RECEIVE_PRODUCT";
export const REMOVE_PRODUCT = "REMOVE_PRODUCT";
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';
export const CLEAR_ERRORS = 'CLEAR_ERRORS';

export const receiveProducts = (products) => ({
  type: RECEIVE_PRODUCTS,
  products
});

export const receiveProduct = (product) => ({
  type: RECEIVE_PRODUCT,
  product
});

export const removeProduct = (productId) => ({
  type: REMOVE_PRODUCT,
  productId
});

export const receiveErrors = errors => {
  return ({
    type: RECEIVE_SESSION_ERRORS,
    errors
  });
}
export const clearErrors = errors => ({
  type: CLEAR_ERRORS,
  errors
})

export const requestProducts = () => dispatch => {
  return ProductAPIUtil.fetchProducts().then((products) =>
    dispatch(receiveProducts(products)));
};

export const requestProduct = (id) => dispatch => {
  return ProductAPIUtil.fetchProduct(id).then((product) =>
    dispatch(receiveProduct(product)));
};

export const createProduct = (product) => dispatch => {
  return ProductAPIUtil.createProduct(product).then((product) =>
    dispatch(receiveProduct(product)), err => (
      dispatch(receiveErrors(err.responseJSON))
    ));
};


export const updateProduct = (product, productId) => dispatch => {
  return ProductAPIUtil.updateProduct(product, productId).then((product) =>
    dispatch(receiveProduct(product)), err => (
      dispatch(receiveErrors(err.responseJSON))
    ));
};

export const deleteProduct = (id) => dispatch => {
  return ProductAPIUtil.deletePorduct(id).then((product) =>
    dispatch(removeProduct(product.id)));
};

