import React from 'react';
import { Link } from 'react-router-dom';


const PostIndexItem = ({ product, deleteProduct }) => {
  return (
    <li>
      <Link to={`/products/${product.id}`}>
        {product.productName}
      </Link>&nbsp;
      <Link to={`/products/${product.id}/edit`}>
        Edit
      </Link>
      <button onClick={() => deleteProduct(product.id)}>Delete</button>
    </li>);
};

export default PostIndexItem;