import { connect } from 'react-redux';
import CartShow from './cart_show';
import { requestCart } from '../../actions/product_actions';

const mapStateToProps = (state, ownProps) => {
debugger
  return ({
    // cart: state.entities.cart[ownProps.match.params.cartId],
    cart: state.entities.cart[Object.keys(state.entities.cart)[0]],
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