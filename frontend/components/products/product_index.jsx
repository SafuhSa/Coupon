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

    let product;
    if (this.props.recentViews.length) {
      product =  this.props.recentViews[0]
    } else {
      product = this.props.products[0]
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

    {/* let result = arr.map(word => ( word[0].toUpperCase() + word.slice(1).toLowerCase())) */}
    let priceoff = 100 - Math.floor((product.dis_price / product.price) * 100)
    let num = Math.ceil((product.quantity / 3) * 2)
    return (

      <div className='index-items'>

        <div className='all-deals-container'>
        <h1 className='all-deals-header'>All Deals</h1>
        {/* <div className='sort-by-container'>
          <h2>Sort by</h2>
        </div> */}
      </div>
          {/* <Link to={`/products/${product.id}`}> */}
          <Link to={`/products/${product.id}`} className="best-deal-container">
              <div className='image-container'> 
            <h3 className='bstdl-recentview'><i className="fas fa-chart-line"></i> &nbsp;  TRENDING</h3>
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
          {/* </Link> */}


          {products}
      </div>
    );
  }
}

export default ProductIndex;
