import React from 'react';
import { Link } from 'react-router-dom';


const PostIndexItem = ({ product, deleteProduct }) => {
  return (
    <div className='index-item-container'>
        <Link to={`/products/${product.id}`}>
      <div className='index-item'>
        <img className='index-pics' src={product.photoUrls[0]} />
          <div>{product.productName}</div>
          <div>{product.price}</div>
          <div>{product.disPrice}</div>
          <div>{product.category}</div>
          <div>{product.description}</div>
          
        <button onClick={() => deleteProduct(product.id)}>Delete</button>
      </div>
        </Link>
    </div>);
};

export default PostIndexItem;
