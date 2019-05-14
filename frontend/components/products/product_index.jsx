import React from 'react';
import ProductIndexItem from './product_index_item';
import ProductFirst from "./product_index_first";
class ProductIndex extends React.Component {

  componentDidMount() {
    this.props.requestProducts();
    this.props.requestRecentView();
  }

  render() {
    if (!this.props.products.length) return null

    let product;
    let disprice;
    if (this.props.recentViews.length) {
      product =  this.props.recentViews[0]
      disprice = product.dis_price;
    } else {
      product = this.props.products[0]
      disprice = product.disPrice;
    }

    const products = this.props.products.map(product => {
      return (
        <ProductIndexItem
          key={product.id}
          product={product}
          deleteProduct={this.props.deleteProduct} 
          createrecentView={this.props.createrecentView}/>
      );
    });

    return (
      <div className="index-items">
        <div className="all-deals-container">
          <h1 className="all-deals-header">All Deals</h1>
        </div>
        
        <ProductFirst product={product} disprice={disprice} />
        {products}
      </div>
    );
  }
}

export default ProductIndex;
