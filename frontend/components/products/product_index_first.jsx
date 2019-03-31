import React from "react";
import { Link } from "react-router-dom";

const ProductFirst = ({ product, disprice }) => {
  let priceoff = 100 - Math.floor((disprice / product.price) * 100);
  let num = Math.ceil((product.quantity / 3) * 2);

  
  return (
    <Link to={`/products/${product.id}`} className="best-deal-container">
      <div className="image-container">
        <h3 className="bstdl-recentview">
          <i className="fas fa-chart-line" /> &nbsp; TRENDING
        </h3>
        <img className="search-pics" src={product.photoUrls[0]} />
      </div>
      <div className="bstdl-prod-left">
        <div className="bstdlproductName">
          {product.product_name}
          {product.productName}
        </div>
        <div className="bsdlcategory">{product.category}</div>
        <div className="bstdldescription">{product.description}</div>

        <div className="bstdl-bottom-left">
          <div className="bstdl-city-rating">
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
              <p className="searchdisPrice">
                {" "}
                ${product.dis_price}
                {product.disPrice}
              </p>
            </div>
            <div className="bstdlpriceOff-con">
              <p className="bstdlpriceOff"> {priceoff}% OFF</p>
            </div>
            <div className="searchview">
              <div className="bsdlviewdiv">View Deal</div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductFirst;
