import React from 'react';
import { Link } from 'react-router-dom';

class CartShow extends React.Component {
  constructor(props) {
    super(props)
    this.getItems = this.getItems.bind(this)
  }
  componentDidMount() {
    // this.props.requestCart(this.props.match.params.cartId);
    this.props.requestCart();
  }
  // componentDidUpdate() {
  //   // this.props.requestCart(this.props.match.params.cartId);
  //   this.props.requestCart();
  // }

  getItems() {
    let result = []
    for (let i = 0; i < this.props.cart.productIds.length; i++) {
      const id = this.props.cart.productIds[i];
      const item = this.props.boughtProducts[id];
      if (item) {
        let num = Math.ceil((item.quantity * 100) + 200)
        let priceoff = 100 - Math.floor((item.disPrice / item.price) * 100)
        let totalprice = item.quantity * item.disPrice


        result.push(<div key={i} className="boghtItem">
            <h1 className="title">{item.productName}</h1>
            <div className="img-decs">
              <img className="show-image" src={item.photoUrls[0]} alt="" />
              <h4 className="cart-description">
                Description: <br /> <br /> {item.description}{" "}
              </h4>
            </div>
            <div className="cart-item-prices">
              <div className="quantity">
                <p>Quantity: {item.quantity}</p>
              </div>

              <div className="purchasePrice-container">
                <p>Total Price</p>
                <p>${totalprice}</p>
              </div>
              <div>
                <div className="prices">
                  <p className="price">${item.price}</p>
                  <p className="disPrice">${item.disPrice}</p>
                </div>
                <p className="price-off"> {priceoff}% OFF</p>
              </div>
            </div>
          <button onClick={() => this.props.deleteItem(item.id) }> Delete</button>
          {/* <input type="submit" value='delete' onClick={() => this.props.deleteItem(item.id)}/> */}
            <p>Over {num}+bought</p>
          </div>);
      }
    }
    return result
  }

  render() {
    if (!this.props.cart) {
      return null;
    }

    return (
      <div className='cart-show-container' >
        {this.getItems()}
        {this.props.cart.id}
      </div>
    );
  }
}

export default CartShow;