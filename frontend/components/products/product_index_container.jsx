import { connect } from 'react-redux';
import ProductIndex from './product_index';
import {
  requestProducts,
  deleteProduct,
  createrecentView,
  requestRecentView
} from "../../actions/product_actions";

const mapStateToProps = state => {
  let arr = [];
  if (state.entities.recentView.products) {
    arr = state.entities.recentView.products;
  } 
  return ({
    products: Object.values(state.entities.products),
    recentViews: arr
});
}

// products: Object.keys(state.products).map(id => state.products[id])
const mapDispatchToProps = dispatch => ({
  requestProducts: () => dispatch(requestProducts()),
  deleteProduct: id => dispatch(deleteProduct(id)),
  createrecentView: product => dispatch(createrecentView(product)),
  requestRecentView: () => dispatch(requestRecentView())
});

export default connect( mapStateToProps, mapDispatchToProps )(ProductIndex);