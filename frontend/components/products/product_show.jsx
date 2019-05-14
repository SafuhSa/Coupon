import React from 'react';
import { Link } from 'react-router-dom';
import ReviewFormContainer from '../review/review_container';
import ReviewIndexContainer from '../review/review_index_container';
import AddItemToCartContainer from './show_right';

class ProductShow extends React.Component {
  constructor(props) {
    super(props)
    this.state = { mainImage: ''}
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

  writeReview() {
    if (this.props.userId) return <ReviewFormContainer productId={this.props.product.id} />;
      return <Link className='login-write-review' to='/login'>please log in to write a Review</Link>;
  }

  render() {
    const { userId, product, createBoughtItem } = this.props;
    if (!product) {
      return <div>Loading...</div>;
    }
    
    let result = []
    for (let i = 0; i < product.photoUrls.length; i++) {
      result.push(<ul className='image-show' key={i}><img key={i} src={product.photoUrls[i]} onClick={() => this.setState({ mainImage: < ul className='image-show' ><img  src={product.photoUrls[i]} /></ul>})}/></ul>)
    }
    
    let ratings = Math.ceil((product.quantity /3) * 2);
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
          <span className="fa fa-star" />({ratings} ratings)
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
            <ReviewIndexContainer productId={product.id} review={product.reviews} />
            </div>
            <div>
            {this.writeReview()}
            </div>
            <div />
          </div>
        <AddItemToCartContainer createBoughtItem={createBoughtItem} userId={userId} product={product} />
        </div>
      </div>;
  }
}

export default ProductShow;