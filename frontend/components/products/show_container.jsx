import { connect } from 'react-redux';
import ProductShow from './product_show';
import { requestProduct } from '../../actions/product_actions';

const mapStateToProps = (state, ownProps) => {
return ({
  product: state.entities.products[ownProps.match.params.productId]
});
}

const mapDispatchToProps = dispatch => ({
  requestProduct: id => dispatch(requestProduct(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductShow);