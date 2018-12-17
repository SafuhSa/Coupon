import merge from 'lodash/merge';

import { RECEIVE_PRODUCTS, RECEIVE_PRODUCT, REMOVE_PRODUCT } from '../actions/product_actions';


const productsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_PRODUCTS:
      return merge({}, action.products)
    case RECEIVE_PRODUCT:
      return merge({}, state, { [action.product.id]: action.product });
    case REMOVE_PRODUCT:
     let newSatae = merge({}, state)
    delete newSatae[action.productId]
      return newSatae;
    default:
      return state;
  }
};

export default productsReducer;