import React from 'react';
import ProductIndexItem from '../products/product_index_item';
import { Link } from "react-router-dom";
class Locations extends React.Component {

  componentDidMount() {
    // this.props.requestProducts();

    let queryString = this.props.location.search.split("=")[1];
    this.props.search(queryString);
    // this.props.requestRecentView();
  }

  render() {
    if (!this.props.products.length) return null

    let recentview;
    if (this.props.recentViews.length) {
      recentview = this.props.recentViews[0]
    } else {
      recentview = this.props.products[0]
    }

    const products = this.props.products.map(product => {

      return (
        <ProductIndexItem
          key={product.id}
          product={product}
          deleteProduct={this.props.deleteProduct}
          createrecentView={this.props.createrecentView} />
      );
    });
    let product = recentview

    return (

      <div className='index-items'>

        {/* <div className="search-item-container">
          <Link to={`/products/${product.id}`}>
            <div className="search-item">
              <div>
                <img className="search-pics" src={product.photoUrls[0]} />
              </div>
              <div className='search-prod-left'>
                <div className="searchproductName">{product.productName}</div>
                <div className="searchcategory">{product.category}</div>
                <div className="searchdescription">{product.description}</div>

                <div className='searchview'>
                  <div className='searchviewbutton'>View Deal</div>
                </div>

                <div className="searchprices">
                  <p className="price">${product.price} </p>
                  <p className="searchdisPrice"> ${product.disPrice}</p>
                </div>
              </div>
            </div>
          </Link>
        </div> */}


        {products}
      </div>
    );
  }
}

export default Locations;
