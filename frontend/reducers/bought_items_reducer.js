import merge from 'lodash/merge';

import { RECEIVE_CART, RECEIVE_BOUGHT_PRODUCT, REMOVE_BOUGHT_PRODUCT } from '../actions/product_actions';


const productsReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_CART:
      return merge({}, state, action.payload.boughtItems);

    case RECEIVE_BOUGHT_PRODUCT:
      return merge({}, state, {
        [action.payload.cart.id]: action.payload.boughtItems
      });
    case REMOVE_BOUGHT_PRODUCT:
      let newState = merge({}, state);
      delete newState[action.boughtProductId];
      return newState;
    default:
      return state;
  }
};

export default productsReducer;