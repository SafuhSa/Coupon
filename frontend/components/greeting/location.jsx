import React from 'react';
import ProductIndexItem from '../products/product_index_item';
import { Link } from "react-router-dom";
class Locations extends React.Component {

  componentDidMount() {
    let queryString = this.props.location.search.split("=")[1].split('%20').join(' ')
    this.props.search(queryString);
  }

  render() {
    if (!this.props.products.length) return null

    let recentview;
    if (this.props.recentViews.length) {
      recentview = this.props.recentViews[0]
    } else {
      recentview = this.props.products[0]
    }

    const products = this.props.products.map((product, i) => {
      let priceoff = 100 - Math.floor((product.dis_price / product.price) * 100)
      let num = Math.ceil((product.quantity / 3) * 2)
      return (
        <Link key={i} to={`/products/${product.id}`} className="best-deal-container">
          <div className='image-container'>
            <h3 className='bstdl-recentview'><i className="fas fa-trophy"></i> &nbsp;  BEST OF COUPON</h3>
            <img className="search-pics" src={product.photoUrls[0]} />
          </div>
          <div className='bstdl-prod-left'>
            <div className="bstdlproductName">{product.product_name}{product.productName}</div>
            <div className="bsdlcategory">{product.category}</div>
            <div className="bstdldescription">{product.description}</div>


            <div className='bstdl-bottom-left'>

              <div className='bstdl-city-rating'>
                <div>{product.city}</div>
                <div className="">
                  <span className="fa fa-star checked" />
                  <span className="fa fa-star checked" />
                  <span className="fa fa-star checked" />
                  <span className="fa fa-star checked" />
                  <span className="fa fa-star" />({num})
                </div>
              </div>
              <div>

                <div className="searchprices">
                  <p className="price">${product.price} </p>
                  <p className="searchdisPrice"> ${product.dis_price}{product.disPrice}</p>
                </div>
                <div className='bstdlpriceOff-con'>
                  <p className="bstdlpriceOff"> {priceoff}% OFF</p>
                </div>
                <div className='searchview'>
                  <div className='bsdlviewdiv'>View Deal</div>
                </div>

              </div>

            </div>
          </div>
        </Link>
      );
    });
    let product = recentview
    let arr =  this.props.location.search.split("=")[1].split("%20").map(word => (word[0].toUpperCase() + word.slice(1).toLowerCase())).join(' ')
    arr = arr.split(' ').map(word => (word[0].toUpperCase() + word.slice(1).toLowerCase())).join(' ')
    debugger
    return (
      <div className="search-page">
        <div className="search-header">
          results in {arr}
        </div>
        {products}
      </div>
      // <div className='index-items'>

      /* <div className="search-item-container">
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
        </div> */

      // {products}
      // </div>
    );
  }
}

export default Locations;
