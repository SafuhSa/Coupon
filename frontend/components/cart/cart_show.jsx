import React from 'react';
import { Link } from 'react-router-dom';
import getItems from './getboughtItems';

class CartShow extends React.Component {
  constructor(props) {
    super(props)
    this.handleDelete = this.handleDelete.bind(this);
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
  render() {
    let { cart, boughtProducts } = this.props;
    if (!cart) return null; 

    let [result, orderSummary, total] = getItems(cart, boughtProducts, this.handleDelete)
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