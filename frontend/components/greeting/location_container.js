import { connect } from 'react-redux';
import Locations from './location'
import { withRouter } from "react-router-dom";
import { search, requestRecentView } from "../../actions/product_actions";

const mapStateToProps = (state, ownprops) => {
  let arr = [];
  if (state.entities.recentView.products) {
    arr = state.entities.recentView.products;
  } 
  return {
    products: Object.values(state.entities.products),
    recentViews: arr
  };
};

const mapDispatchToProps = dispatch => ({
  search: str => dispatch(search(str)),
  requestRecentView: () => dispatch(requestRecentView())
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Locations));