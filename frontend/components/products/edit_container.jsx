import React from 'react';

import { connect } from 'react-redux';
import { requestProduct, updateProduct } from '../../actions/product_actions';
import ProductForm from './product_form';


class EditProductForm extends React.Component {
  componentDidMount() {
    this.props.requestProduct(this.props.match.params.postId);
  }

  render() {
    const { action, formType, product } = this.props;
    return (
      <ProductForm
        action={action}
        formType={formType}
        errors={this.props.errors}
        product={product} />
    );
  }
}

const msp = (state, ownPorps) => {
  let id = ownPorps.match.params.productId
  return ({
    product: state.entities.products[id],
    formType: 'Update',
    errors: state.errors.product
  })
}

const mdp = dispatch => {
  return ({
    requestProduct: (id) => dispatch(requestProduct(id)),
    action: (product) => dispatch(updateProduct(product))
  })
}

export default connect(msp, mdp)(EditProductForm)