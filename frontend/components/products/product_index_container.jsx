import { connect } from 'react-redux';
import ProductIndex from './product_index';
import { requestProducts, deleteProduct, createrecentView } from '../../actions/product_actions';

const mapStateToProps = state => {

  return ({
    products: Object.values(state.entities.products)
});
}

// products: Object.keys(state.products).map(id => state.products[id])
const mapDispatchToProps = dispatch => ({
  requestProducts: () => dispatch(requestProducts()),
  deleteProduct: id => dispatch(deleteProduct(id)),
  createrecentView: product => dispatch(createrecentView(product))
});

export default connect( mapStateToProps, mapDispatchToProps )(ProductIndex);