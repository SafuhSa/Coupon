import merge from 'lodash/merge';
import {
  RECEIVE_CURRENT_USER,
  LOGOUT_CURRENT_USER,
} from '../actions/session_actions';
import { RECEIVE_LOCATION } from "../actions/product_actions";

const _nullUser = Object.freeze({
  id: null
});

const sessionReducer = (state = _nullUser, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return merge({}, state, { id: action.currentUser.id });
    // case RECEIVE_LOCATION:
    //   return merge { [city]: action.payload} );
    case LOGOUT_CURRENT_USER:
      return merge({}, state, _nullUser);
    default:
      return state;
  }
};

export default sessionReducer;