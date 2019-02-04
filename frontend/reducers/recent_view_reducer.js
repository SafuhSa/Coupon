import { RECEIVE_RECENT_VIEW } from "../actions/product_actions";
import merge from 'lodash/merge';

const recentViewReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_RECENT_VIEW:
      return action.payload;

    default:
      return state;
  }
};

export default recentViewReducer;