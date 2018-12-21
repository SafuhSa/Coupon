import React from 'react';
import { Link } from 'react-router-dom';

class ProductShow extends React.Component {
  constructor(props) {
    super(props)
    this.state = { mainImage: ''}
    this.addItemToCart = this.addItemToCart.bind(this)
  }
  componentDidMount() {
    this.props.requestProduct(this.props.match.params.productId);
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

  addItemToCart() {

    let item = {productId: this.props.product.id, quantity: 2}
    this.props.createBoughtItem(item)
  }

  render() {
    const { product } = this.props;
    if (!product) {
      return <div>Loading...</div>;
    }

    let num = Math.ceil((product.quantity /3) * 2)
    let result = []
    
    for (let i = 0; i < product.photoUrls.length; i++) {
      result.push(<ul className='image-show' key={i}><img key={i} src={product.photoUrls[i]} onClick={() => this.setState({ mainImage: < ul className='image-show' ><img  src={product.photoUrls[i]} /></ul>})}/></ul>)
    }
    
    if (!this.state.mainImage) {
      this.updateImage()
    }
    
    return (
      <div className='show-container'>
        <div className='show-title'>
              <div  >
                <h2>{product.productName}</h2>
              </div>

              <div className='title-rating'>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star"></span>({num} ratings)
              </div>
            </div>

            <div className='inside-show-container'>
              <div className='left-show-container'>
                <div className='main-picture'>
                  {this.state.mainImage}
                </div>
                <div className='show-images'>
                {result}
                </div>
                <div className='product_description'>
                  <h3>Highlights</h3>
                  <hr />
                  <p>{product.description}</p>
                </div>
                <h3>Customer Reviews</h3>
                <hr />
                <textarea placeholder='Write a review........' className='review-input'/>
                <div>

                </div>
              </div>

              <div className='right-show-container'>
                <div className='rating-bought'>

                  <div className= 'clc-eye-star'>
                    <i className="far fa-clock"></i>
                  <p>Limited Time Remaining!</p>
                  </div>

                  <div className='clc-eye-star'>
                    <i className="far fa-eye"></i>
                    <p>{product.quantity}+ viewed</p>
                  </div>

                  <div className='clc-eye-star'>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star"></span>
                  <p>{num} ratings</p>
                  </div>
                </div>

            <div className='prices'>
              <p className='price'>{product.price}</p>
              <p className='disPrice'>{product.disPrice}</p>

                </div>

                <div className='show-buttons'>
                  <label htmlFor=""> quantity 
                  <input type="text"/>
                  </label>
                  <button className='show-submit' onClick={() => this.addItemToCart()}>Add item to Cart</button>
            <Link className='show-submit' to={`/products/${product.id}/edit`}>Edit</Link>
            <Link className='show-submit' to="/">Home page</Link>
            </div>

              </div>
          </div>
      </div>
    );
  }
}

export default ProductShow;