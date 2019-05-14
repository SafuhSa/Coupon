import { connect } from 'react-redux';
import { createProduct } from '../../actions/product_actions';
import ProductForm from './product_form';

const msp = state => {
  const product = { productName: '', price: '', disPrice: '', description: '', quantity: '', category: '', photoFile: [], photoUrl: [] }
  const formType = 'Create Product';
  const errors = state.errors.product
  return { product, formType, errors }
}

const mdp = dispatch => {
  return ({
    action: product => dispatch(createProduct(product))
  })
}

export default connect(msp, mdp)(ProductForm)