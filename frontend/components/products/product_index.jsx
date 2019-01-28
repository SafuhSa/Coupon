import React from 'react';
import ProductIndexItem from './product_index_item';

class ProductIndex extends React.Component {

  componentDidMount() {
    this.props.requestProducts();
    // debugger
  }

  render() {

    const products = this.props.products.map(product => {
      return (
        <ProductIndexItem
          key={product.id}
          product={product}
          deleteProduct={this.props.deleteProduct} />
      );
    });
    return (

      <div className='index-items'>
      {products.length}
          {products}
      </div>
    );
  }
}

export default ProductIndex;
