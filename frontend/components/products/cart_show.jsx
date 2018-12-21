import React from 'react';
import { Link } from 'react-router-dom';

class CartShow extends React.Component {
  constructor(props) {
    super(props)
    this.getItems = this.getItems.bind(this)
  }
  componentDidMount() {
    this.props.requestCart(this.props.match.params.cartId);
  }

  getItems() {
    let result = []

    for (let i = 0; i < this.props.cart.productIds.length; i++) {
      const id = this.props.cart.productIds[i];
      const item = this.props.boughtProducts[id]
      
      result.push(<div>
        <h1>{item.productName}</h1>
        < img src={item.photoUrls[0]} alt="" />
        <h3>{item.price}</h3>
        <h3>{item.disPrice}</h3>
      </div>)
    }

    return result
  }

  render() {
    if (!this.props.cart) {
      return null;
    }
    

    return (
      <div>
        <h4>This is your Cart</h4>
        {this.getItems()}
        {this.props.cart.id}
      </div>
    );
  }
}

export default CartShow;