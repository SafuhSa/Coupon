import { RECEIVE_CART } from '../actions/product_actions';
import merge from 'lodash/merge';

const cartsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {

    case RECEIVE_CART:
      return merge({}, state, {[action.payload.cart.id]: action.payload.cart});

    
    default:
      return state;
  }
};

export default cartsReducer;