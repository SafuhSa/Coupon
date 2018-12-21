import React from 'react';
import { Link } from 'react-router-dom';

class CartShow extends React.Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {
    this.props.requestCart(this.props.match.params.cartId);
  }


  render() {
    debugger
    if (!this.props.cart) {
      return null;
    }
    
    return (
      <div>
        <h4>This is your Cart</h4>
        {this.props.cart.id}
      </div>
    );
  }
}

export default CartShow;