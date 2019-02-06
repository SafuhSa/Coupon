import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from "react-router-dom";
// import Sadface from '../../../app/assets/images/Sad_Face.jpg';  

class SearchResult extends React.Component {
  constructor(props) {
    super(props);
    this.state = { queryString: "" };
  }

  componentDidMount() {
    let queryString = this.props.location.search.split("=")[1];
    this.props.search(queryString);
  }

  render() {
    const products = this.props.products.map((product, i) => {
      let priceoff = 100 - Math.floor((product.disPrice / product.price) * 100)
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

        // <div key={i} className="search-item-container">
        //   <Link to={`/products/${product.id}`}>
        //     <div className="search-item">
        //       <div>
        //         <img className="search-pics" src={product.photoUrls[0]} />
        //       </div>
        //       <div className='search-prod-left'>
        //         <div className="searchproductName">{product.productName}</div>
        //         <div className="searchcategory">{product.category}</div>
        //         <div className="searchdescription">{product.description}</div>

        //         <div className='searchview'>
        //           <div className='searchviewbutton'>View Deal</div>
        //         </div>

        //         <div className="searchprices">
        //           <p className="price">${product.price} </p>
        //           <p className="searchdisPrice"> ${product.disPrice}</p>
        //         </div>
        //       </div>
        //     </div>
        //   </Link>
        // </div>
      );
    });
    if (!this.props.products.length) {
      // let img = new img
      return (
        <div className="search-page">
          <div className="search-header">Sorry, no results found for '{this.props.location.search.split("=")[1]}'</div>
          {/* <img src='./app/assets/images/Sad_Face.jpg' alt=""/> */}
          <Link className="search-homepage" to="/">
            Back to Home page
          </Link>
        </div>
      )
    }

    return (
      /// className='index-items'
      <div className="search-page">
        <div className="search-header">results for '{this.props.location.search.split("=")[1]}'</div>
        {products}
      </div>
    );
  }
}

export default SearchResult;
// export default withRouter(Search);
