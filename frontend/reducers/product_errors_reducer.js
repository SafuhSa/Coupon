import {
  RECEIVE_SESSION_ERRORS,
  RECEIVE_PRODUCT,
  RECEIVE_PRODUCTS,
  CLEAR_ERRORS,
} from '../actions/product_actions';

export default (state = [], action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_SESSION_ERRORS:
      return action.errors;
    case RECEIVE_PRODUCT:
      return [];
    case RECEIVE_PRODUCTS:
      return [];
    case CLEAR_ERRORS:
      return [];
    default:
      return state;
  }
};