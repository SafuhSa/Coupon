import React from 'react';
import { Link } from 'react-router-dom';

const getItems = (cart, boughtProducts, handleDelete) => {
  // let { cart, boughtProducts } = this.props;
  let result = []
  let orderSummary = []
  let total = 0;
  for (let i = 0; i < cart.productIds.length; i++) {
    const id = cart.productIds[i];
    const item = boughtProducts[id];
    if (item) {
      let totalprice = item.quantity * item.disPrice
      let saveprice = (item.price - item.disPrice).toFixed(2);
      total += totalprice
      result.push(<div key={i} className="boghtItem">
        <Link to={`/products/${item.productId}`}>
          <img className="cart-item-image" src={item.photoUrls[0]} alt="" />
        </Link>
        <div className="cart-item-description">
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
          <button className="remove-button" onClick={handleDelete(item.id)}>
            Remove
              </button>
        </div>
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

export default getItems;