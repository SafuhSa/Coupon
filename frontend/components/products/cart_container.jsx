import { connect } from 'react-redux';
import CartShow from './cart_show';
import { requestCart, deleteBoughtItem } from "../../actions/product_actions";

const mapStateToProps = (state, ownProps) => {
  return ({
    // cart: state.entities.cart[ownProps.match.params.cartId],
    cart: state.entities.cart[Object.keys(state.entities.cart)[0]],
    boughtProducts: state.entities.boughtProducts

  });
}

const mapDispatchToProps = dispatch => ({
  requestCart: id => dispatch(requestCart(id)),
  deleteItem: id => dispatch(deleteBoughtItem(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CartShow);