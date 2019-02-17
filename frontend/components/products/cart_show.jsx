import React from 'react';
import { Link } from 'react-router-dom';

class CartShow extends React.Component {
  constructor(props) {
    super(props)
    this.getItems = this.getItems.bind(this)
  }
  componentDidMount() {
    this.props.requestCart();
  }
  
  handleDelete(id) {
    return (e) => {
      e.preventDefault();
      this.props.deleteItem(id)
    }
  }

  getItems() {
    let result = []
    let orderSummary = []
    let total = 0;
    for (let i = 0; i < this.props.cart.productIds.length; i++) {
      const id = this.props.cart.productIds[i];
      const item = this.props.boughtProducts[id];
      if (item) {
        let num = Math.ceil((item.quantity * 100) + 200)
        let priceoff = 100 - Math.floor((item.disPrice / item.price) * 100)
        let totalprice = item.quantity * item.disPrice
        let saveprice = (item.price - item.disPrice).toFixed(2);
        total += totalprice
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
              {/* <button className="remove-button" onClick={() => this.props.deleteItem(item.id)}> */}
              <button className="remove-button" onClick={this.handleDelete.bind(this)(item.id)}>
                Remove
              </button>
            </div>
            {/* <p>Over {num}+bought</p> */}
          </div>);

        orderSummary.push(
          <div key={i}>
            <div className='subtotal-prod-name'>{item.productName}</div>
            <div className="subtotal">
              <h2>Subtotal</h2>
              <h2>${totalprice.toFixed(2)}</h2>
            </div>
          </div>
        );
      }
    }
    return [result, orderSummary, total];
  }

  render() {
    if (!this.props.cart) {
      return null;
    }
    let result;// = this.getItems()[0]
    let orderSummary;// = this.getItems()[1]
    let total;// = this.getItems()[2]
    [result, orderSummary, total] = this.getItems()
    if (!result.length) {
      return(
        <div className='cart-show-container '>
          <h1 className='cart-header-empty'> Your cart is empty!</h1>
          <div className='cart-empty-body'>
            <span><i className="fas fa-shopping-cart icon-goods"></i></span>
            <h2 className='empty-cart-mess'> Please add some items to your cart </h2>
            <Link to='/' className='empty-cart-button'>Continue Shopping</Link>
          </div>
        </div>
      )  
    } 


    return (
      <div className="cart-page">
        <div className="cart-show-container">
          <h1 className="cart-header-info">
            Is all your information correct?
          </h1>
          <h2 className="check-billing-info">
            Please check your billing information and item contents before
            finalizing your order
          </h2>
          <div className="cart-body">
            <div className="cart-left-side">
              <div className="cart-items">
                <h1 className="your-items">Your Items</h1>
                {result}
              </div>
              <div className="cart-items">
                <h1 className="your-items">Payment Method</h1>
                <form className="payment-container">
                  <div>
                    <input name='payment' className='input-radio' value="credit-cart" type="radio" /> Credit Card <br /> <i className="far fa-credit-card"></i>
                  </div>
                  <div>
                    <input name='payment' className='input-radio' value="paypal" type="radio" /> PayPal <br/> <i className="fab fa-cc-paypal"></i>
                  </div>
                </form>
              </div>
            </div>

            <div className="order-summary-total">
              <h1 className="order-summary-title">Order Summary</h1>
              <div className="order-summary-body">
                {orderSummary}
                <br />
                <div className="order-total">
                  <h2>Order Total:</h2>
                  <h2>${total.toFixed(2)}</h2>
                </div>
                <p className="order-agree-term">
                  By clicking below I accept the current Terms of Use,
                  Refund Policy and Privacy Statement.
                </p>
                <button className="place-order-button">Place Order</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );}
  }
  
  export default CartShow;

  {/* 
            <div id="form-container">
              <div id="sq-ccbox">
                <form id="nonce-form" noValidate action="PATH/TO/PAYMENT/PROCESSING/PAGE" method="post">
                  <fieldset>
                    <span className="label">Card Number</span>
                    <div id="sq-card-number"></div>
  
                    <div className="third">
                      <span className="label">Expiration</span>
                      <div id="sq-expiration-date"></div>
                    </div>
  
                    <div className="third">
                      <span className="label">CVV</span>
                      <div id="sq-cvv"></div>
                    </div>
  
                    <div className="third">
                      <span className="label">Postal</span>
                      <div id="sq-postal-code"></div>
                    </div>
                  </fieldset>
  
                  <button id="sq-creditcard" className="button-credit-card" >Pay $1.00</button>
  
                  <div id="error"></div>
  
        <input type="hidden" id="card-nonce" name="nonce"/>
      </form>
    </div>        
  </div> */}