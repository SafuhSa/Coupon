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
      return (
        <div key={i} className="search-item-container">
          <Link to={`/products/${product.id}`}>
            <div className="search-item">
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
            </div>
          </Link>
        </div>
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
