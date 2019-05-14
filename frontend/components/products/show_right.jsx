import React from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";

class AddItemToCartContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = { quantity: 1, purchasePrice: 0 }

    this.addItemToCart = this.addItemToCart.bind(this)
    this.updateQuantity = this.updateQuantity.bind(this)
  }

  updateQuantity(e) {
    let total = e.target.value * this.props.product.disPrice
    this.setState({ quantity: e.target.value, purchasePrice: total })
  }
  
  addItemToCart(e) {
    e.preventDefault();
    const { userId, product, createBoughtItem, history } = this.props;

    if (userId) {
      let item = { productId: product.id, quantity: this.state.quantity }
      createBoughtItem(item).then(history.push('/cart'));
    } else {
      history.push("/login");
    }
  }
  
  render() {
    let { product } = this.props;

    let purchasePrice;
    if (this.state.purchasePrice === 0) {
      purchasePrice = product.disPrice
    } else {
      purchasePrice = this.state.purchasePrice
    }

    let ratings = Math.ceil((product.quantity / 3) * 2)
    let priceoff = 100 - Math.floor((product.disPrice / product.price) * 100)
    if (!priceoff) priceoff = 0;

    return (
      <div className="right-show-container">
              <div className="rating-bought">
                <div className="clc-eye-star">
                  <i className="far fa-clock" />
                  <p>Limited Time Remaining!</p>
                </div>
                <div className="clc-eye-star">
                  <i className="far fa-eye" />
                  <p>{product.quantity}+ viewed</p>
                </div>
                <div className="clc-eye-star">
                  <span className="fa fa-star checked" />
                  <span className="fa fa-star checked" />
                  <span className="fa fa-star checked" />
                  <span className="fa fa-star checked" />
                  <span className="fa fa-star" />
                  <p>{ratings} ratings</p>
                </div>
              </div>
              <div className="quantity-prices">
                <label htmlFor="">
                  Quantity
                  <input min='1' type="number" defaultValue={this.state.quantity} onChange={this.updateQuantity}  />
                </label>
                <div>
                  <div className="prices">
                    <p className="price">${product.price}</p>
                    <p className="disPrice">${product.disPrice}</p>
                  </div>
                  <p className="price-off"> {priceoff}% OFF</p>
                </div>
              </div>
              <div className="show-buttons">
                <div className="purchasePrice-container">
                  <div>Total Purchase Price:</div>

                  <div className="statepurchasePrice">
                  ${purchasePrice}
                  </div>
                </div>
                <button className="show-submit" onClick={this.addItemToCart}>
                  Add item to Cart
                </button>
                <Link className="show-submit" to="/">
                  Home page
                </Link>
              </div>
        </div>
    );
  }
};

export default withRouter(AddItemToCartContainer);

{/* <Link className="show-submit" to={`/products/${product.id}/edit`}>
  Edit
</Link>  */}