import { connect } from 'react-redux';
import CartShow from './cart_show';
import { requestCart } from '../../actions/product_actions';

const mapStateToProps = (state, ownProps) => {

  return ({
    cart: state.entities.cart[ownProps.match.params.cartId],
    boughtProducts: state.entities.boughtProducts

  });
}

const mapDispatchToProps = dispatch => ({
  requestCart: id => dispatch(requestCart(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CartShow);