import React from "react";
import { Link } from "react-router-dom";

const RightCon = ({ product, deleteProduct, createrecentView }) => {
  addItemToCart(e) {
    e.preventDefault();
    if (this.props.userId) {

      let item = { productId: this.props.product.id, quantity: this.state.quantity }
      this.props.createBoughtItem(item).then(this.props.history.push('/cart'));
    } else {
      this.props.history.push("/login");
    }
  }
  
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
                <p>{num} ratings</p>
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
              {/* <Link className="show-submit" to={`/products/${product.id}/edit`}>
                Edit
              </Link>  */}

               <Link className="show-submit" to="/">
                Home page
              </Link>
            </div>
      </div>
  );
};

export default RightCon;
