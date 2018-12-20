import React from 'react';
import { Link } from 'react-router-dom';

class ProductShow extends React.Component {
  componentDidMount() {
    this.props.requestProduct(this.props.match.params.productId);
  }

  componentDidUpdate(prevProps) {
    
    if (prevProps.product && (prevProps.product.id != this.props.match.params.productId)) {
      this.props.requestProduct(this.props.match.params.productId);
    }
  }

  render() {

    const { product } = this.props;
    if (!product) {
      return <div>Loading...</div>;
    }

    let result = []

    for (let i = 0; i < product.photoUrls.length; i++) {
      result.push(<ul> <img key={i} src={product.photoUrls[i]} /></ul>)
    }


    return (
      <div>
        <h3>{product.productName}</h3>
        <div>
          {result[0]}
        </div>
        <div>
        {result.slice(1)}
        </div>
        <p>{product.price}</p>
        <p>{product.disPrice}</p>
        <p>{product.description}</p>
        <Link to={`/products/${product.id}/edit`}>Edit</Link>
        <Link to="/">Back to Index</Link>
      </div>
    );
  }
}

export default ProductShow;