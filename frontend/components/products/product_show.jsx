import React from 'react';
import { Link } from 'react-router-dom';
import ReviewForm from '../review/review_form';

class ProductShow extends React.Component {
  constructor(props) {
    super(props)
    this.state = { mainImage: '', quantity: 1, purchasePrice: 0 }
    this.addItemToCart = this.addItemToCart.bind(this)
    this.updateQuantity = this.updateQuantity.bind(this)
  }

  componentDidMount() {
    this.props.requestProduct(this.props.match.params.productId).then(() => {
      let url = this.props.product.photoUrls[0];
      this.setState({ mainImage: <ul className='image-show'><img src={url} /></ul>})
    } )
  }

  componentDidUpdate(prevProps) {
    if (prevProps.product && (prevProps.product.id != this.props.match.params.productId)) {
      this.props.requestProduct(this.props.match.params.productId);
    }
  }

  updateImage() {
    let url = this.props.product.photoUrls[0]
    this.setState({ mainImage: <ul className='image-show'><img  src={url}/></ul> })
  }

updateQuantity(e) {
  let total = e.target.value * this.props.product.disPrice
  this.setState({ quantity: e.target.value, purchasePrice: total })
}

  addItemToCart(e) {
    e.preventDefault();
    if (this.props.userId) {

      let item = {productId: this.props.product.id, quantity: this.state.quantity}
      this.props.createBoughtItem(item).then(this.props.history.push('/cart'));
    } else {
      this.props.history.push("/login");
    }
  }
 

  render() {
    const { product } = this.props;
    if (!product) {
      return <div>Loading...</div>;
    }
    let purchasePrice;
    if (this.state.purchasePrice === 0) {
       purchasePrice =  product.disPrice
     } else {
      purchasePrice = this.state.purchasePrice
     }

    let num = Math.ceil((product.quantity /3) * 2)
    let priceoff = 100 - Math.floor((product.disPrice /product.price) * 100)
    let result = []
    
    for (let i = 0; i < product.photoUrls.length; i++) {
      result.push(<ul className='image-show' key={i}><img key={i} src={product.photoUrls[i]} onClick={() => this.setState({ mainImage: < ul className='image-show' ><img  src={product.photoUrls[i]} /></ul>})}/></ul>)
    }
    
    
    
    return <div className="show-container">
        <div className="show-title">
          <div>
            <h2>{product.productName}</h2>
          </div>

          <div className="title-rating">
            <span className="fa fa-star checked" />
            <span className="fa fa-star checked" />
            <span className="fa fa-star checked" />
            <span className="fa fa-star checked" />
            <span className="fa fa-star" />({num} ratings)
          </div>
        </div>

        <div className="inside-show-container">
          <div className="left-show-container">
            <div className="main-picture">{this.state.mainImage}</div>
            <div className="show-images">{result}</div>
            <div className="product_description">
              <h3>Highlights</h3>
              <hr />
              <p>{product.description}</p>
            </div>
            <h3>Customer Reviews</h3>
            <hr />
            <div>
            <ReviewForm />
            </div>
            <div />
          </div>

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
              </Link> */}
              <Link className="show-submit" to="/">
                Home page
              </Link>
            </div>
          </div>
        </div>
      </div>;
  }
}

export default ProductShow;