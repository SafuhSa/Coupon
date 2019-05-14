import { combineReducers } from 'redux';
import users from './users_reducer';
import products from './products_reducer';
import boughtProducts from './bought_items_reducer';
import cart from './cart_reducer';
import recentView from "./recent_view_reducer";

export default combineReducers({
  users,
  products,
  boughtProducts,
  cart,
  recentView
});
