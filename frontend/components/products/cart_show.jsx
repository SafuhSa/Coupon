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
        let saveprice = (item.price - item.disPrice).toFixed(2);


        result.push(<div key={i} className="boghtItem">
            <Link to={`/products/${item.productId}`}>
              <img className="cart-item-image" src={item.photoUrls[0]} alt="" />
            </Link>
            <div>
              <Link to={`/products/${item.productId}`}>
                <h2 className="cart-description">{item.description}</h2>
              </Link>
              <br />
              Qty: {item.quantity}
            </div>
            <div className="price-end">
              <Link to={`/products/${item.productId}`} className="realPrice">
                ${item.disPrice.toFixed(2)}
              </Link>
            <Link to={`/products/${item.productId}`} className="org-save-price">
                <p className="price">${item.price.toFixed(2)}</p>
                <p className="save-price">
                  &nbsp;You Save ${saveprice}
                </p>
              </Link>
              <button className="remove-button" onClick={() => this.props.deleteItem(item.id)}>
                {" "}
                Remove
              </button>
            </div>
            {/* <input type="submit" value='delete' onClick={() => this.props.deleteItem(item.id)}/> */}
            {/* <p>Over {num}+bought</p> */}
          </div>);
      }
    }
    return result
  }

  render() {
    if (!this.props.cart) {
      return null;
    }
    let result = this.getItems()
    if (!result.length) {
      return(
        <div className='cart-show-container '>
          <h1 className='cart-header-empty'> Your cart is empty! ({this.props.cart.id}) </h1>
          <div className='cart-empty-body'>
            <span><i className="fas fa-shopping-cart icon-goods"></i></span>
            <h2 className='empty-cart-mess'> Please add some items to your cart </h2>
            <Link to='/' className='empty-cart-button'>Continue Shopping</Link>
          </div>
        </div>
      )  
    } 


    return (
      <div className='cart-page' >
        <div className="cart-show-container">
          <h1 className='cart-header-info'>Is all your information correct?</h1>
          <h2 className='check-billing-info'>Please check your billing information and item contents before finalizing your order({this.props.cart.id})</h2>
          <div className='cart-body'>
            <div className='cart-items'>
              <h1 className='your-items'>Your Items</h1>
                {result}
            </div>
            <div className='order-summary-total'>
              <h1 className='order-summary-title'>Order Summary</h1>
            </div>
          </div>          
        </div>
      </div>
      )}
}

export default CartShow;