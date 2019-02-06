import React from 'react';
import ProductIndexItem from './product_index_item';
import { Link } from "react-router-dom";
class ProductIndex extends React.Component {

  componentDidMount() {
    this.props.requestProducts();
    this.props.requestRecentView();
  }

  render() {
    if (!this.props.products.length) return null

    let recentview;
    if (this.props.recentViews.length) {
      recentview =  this.props.recentViews[0]
    } else {
      recentview = this.props.products[0]
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
    let product = recentview
    return (

      <div className='index-items'>


          {/* <Link to={`/products/${product.id}`}> */}
          <Link to={`/products/${product.id}`} className="best-deal-container">
              <div>
                <img className="search-pics" src={product.photoUrls[0]} />
              </div>
              <div className='search-prod-left'>
                <div className="searchproductName">{product.product_name}</div>
                <div className="searchcategory">{product.category}</div>
                <div className="searchdescription">{product.description}</div>

                <div className='searchview'>
                  <div className='searchviewbutton'>View Deal</div>
                </div>

                <div className="searchprices">
                  <p className="price">${product.price} </p>
                  <p className="searchdisPrice"> ${product.dis_price}</p>
                </div>
              </div>
            </Link>
          {/* </Link> */}


          {products}
      </div>
    );
  }
}

export default ProductIndex;
