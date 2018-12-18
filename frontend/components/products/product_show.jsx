import React from 'react';
import { Link } from 'react-router-dom';

class ProductShow extends React.Component {
  componentDidMount() {
    this.props.requestProduct(this.props.match.params.productId);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.product.id != this.props.match.params.productId) {
      this.props.requestProduct(this.props.match.params.productId);
    }
  }

  render() {
    const { product } = this.props;
    if (!product) {
      return <div>Loading...</div>;
    }
    return (
      <div>
        <h3>{product.productName}</h3>
        <img src={product.photoUrl} />
        <p>{product.price}</p>
        <p>{product.disPrice}</p>
        <p>{product.description}</p>
        <Link to="/">Back to Index</Link>
      </div>
    );
  }
}

export default ProductShow;