import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from "react-router-dom";

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
      return (
        <div key={i} className="search-item-container">
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
        </div>
      );
    });
    if (!this.props.products.length) {
      return (
        <div className="search-page">
          <div className="search-header">Sorry, no results found for '{this.props.location.search.split("=")[1]}'</div>
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
