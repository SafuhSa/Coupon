import { RECEIVE_CART, RECEIVE_BOUGHT_PRODUCT } from '../actions/product_actions';
import merge from 'lodash/merge';

const cartsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_BOUGHT_PRODUCT:
      return merge({}, { [action.payload.cart.id]: action.payload.cart });
    case RECEIVE_CART:
      return merge({}, {[action.payload.cart.id]: action.payload.cart});
    default:
      return state;
  }
};

export default cartsReducer;