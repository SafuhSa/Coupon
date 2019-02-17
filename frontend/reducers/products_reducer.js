import merge from 'lodash/merge';

import { RECEIVE_PRODUCTS, RECEIVE_PRODUCT, REMOVE_PRODUCT } from '../actions/product_actions';
import { RECEIVE_REVIEW, REMOVE_REVIEW } from "../actions/review_actions";
import { EWOULDBLOCK } from 'constants';

const productsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_PRODUCT:
      return merge({}, state, { [action.product.id]: action.product });
    case RECEIVE_REVIEW:
      let newState = merge({}, state)
      newState[action.review.productId].reviews.unshift(action.review)
      return newState;
    case REMOVE_REVIEW:
      let newState1 = merge({}, state)
      let arr = newState1[action.review.productId].reviews 
      newState1[action.review.productId].reviews  = removeEl(arr, action.review)
      return newState1;
    case RECEIVE_PRODUCTS:
      return merge({}, action.products)
    case REMOVE_PRODUCT:
     let newSatae = merge({}, state)
    delete newSatae[action.productId]
      return newSatae;
    default:
      return state;
  }
};

export default productsReducer;

function removeEl(arr, target) {
  for(let i = 0; i < arr.length; i++) {
    const el = arr[i];
    if (el.id === target.id) {
      arr.splice(i, 1)
    }
  }
  return arr;
}