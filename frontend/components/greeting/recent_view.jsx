import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from "react-router-dom";
// import Sadface from '../../../app/assets/images/Sad_Face.jpg';  

class RecentView extends React.Component {
  constructor(props) {
    super(props);
    this.state = { queryString: "" };
  }

  componentDidMount() {
    this.props.requestRecentView();
  }

  render() {
    if (!this.props.products.length || !this.props.products[0] ) {
      // let img = new img
      return (
        <div className="search-page">
          <div className="search-header">Sorry, no recently viewed item yet</div>
          {/* <img src='./app/assets/images/Sad_Face.jpg' alt="" /> */}
          <Link className="search-homepage" to="/">
            Back to Home page
          </Link>
        </div>
      )
    }

    const products = this.props.products.map((product, i) => {
      let priceoff = 100 - Math.floor((product.dis_price / product.price) * 100)
      let num = Math.ceil((product.quantity / 3) * 2)
      return (
        <Link key={i} to={`/products/${product.id}`} className="best-deal-container">
          <div className='image-container'>
            <h3 className='bstdl-recentview'><i className="far fa-eye"></i> &nbsp;  RECENTLY VIEWED</h3>
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
        //         <div className="searchproductName">{product.product_name}</div>
        //         <div className="searchcategory">{product.category}</div>
        //         <div className="searchdescription">{product.description}</div>

        //         <div className='searchview'>
        //           <div className='searchviewbutton'>View Deal</div>
        //         </div>

        //         <div className="searchprices">
        //           <p className="price">${product.price} </p>
        //           <p className="searchdisPrice"> ${product.dis_price}</p>
        //         </div>
        //       </div>
        //     </div>
        //   </Link>
        // </div>
      );
    });


    return (
      /// className='index-items'
      <div className="search-page">
        <div className="search-header">Recently Viewed</div>
        {products}
      </div>
    );
  }
}

export default RecentView;
// export default withRouter(Search);
