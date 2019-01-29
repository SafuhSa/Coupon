import { combineReducers } from 'redux';
import users from './users_reducer';
import products from './products_reducer';
import boughtProducts from './bought_items_reducer';
import cart from './cart_reducer';

// import benches from './benches_reducer';
// import reviews from './reviews_reducer';

export default combineReducers({
  // benches,
  // reviews,
  users,
  products,
  boughtProducts,
  cart
});
