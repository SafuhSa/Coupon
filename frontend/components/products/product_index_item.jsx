import React from 'react';
import { Link } from 'react-router-dom';


const PostIndexItem = ({ product, deleteProduct }) => {
  return (
    <div className='index-item-container'>
        <Link to={`/products/${product.id}`}>
      <div className='index-item'>
        <div>
          <img className='index-pics' src={product.photoUrls[0]} />
        </div>
        <div>
            <div className='productName'>{product.productName}</div>
            <div className='category'>{product.category}</div>
            <div className='prices'>
            <p className='price'>${product.price} </p>
            <p className='disPrice'> ${product.disPrice}</p>
            </div>
            <div className='description'>{product.description}</div>
        </div>
          
        <button onClick={() => deleteProduct(product.id)}>Delete</button>
      </div>
        </Link>
    </div>);
};

export default PostIndexItem;
