import React from 'react';
import { Link } from 'react-router-dom';


const PostIndexItem = ({ product, deleteProduct }) => {
  return (
    <div className='index-item-container'>
      <div className='index-item'>
        <img className='index-pics' src={product.photoUrls[0]} />
        <Link to={`/products/${product.id}`}>
          {product.productName}
        </Link>&nbsp;
        <Link to={`/products/${product.id}/edit`}>
          Edit
        </Link>
        <button onClick={() => deleteProduct(product.id)}>Delete</button>
      </div>
    </div>);
};

export default PostIndexItem;
