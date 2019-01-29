import { connect } from 'react-redux';
import ProductShow from './product_show';
import { requestProduct, createBoughtItem, createrecentView } from '../../actions/product_actions';

const mapStateToProps = (state, ownProps) => {

return ({
  product: state.entities.products[ownProps.match.params.productId],
  recent: state.session.recent,
  userId: state.session.id
});
}

const mapDispatchToProps = dispatch => ({
  requestProduct: id => dispatch(requestProduct(id)),
  createBoughtItem: item => dispatch(createBoughtItem(item)),
  createrecentView: product => dispatch(createrecentView(product))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductShow);