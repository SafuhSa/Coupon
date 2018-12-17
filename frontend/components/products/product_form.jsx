import React from 'react';
import { withRouter } from 'react-router-dom';

class ProductForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = this.props.product;
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return (e) => {
      this.setState({ [field]: e.target.value });
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.action(this.state).then(() => this.props.history.push('/'));
  }

  renderErrors() {
    
    return (
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  render() {

    return (
      <div className='create-edit-form'>
        {this.renderErrors()}
        <form onSubmit={this.handleSubmit}>
          <label > product_name
          <input className="product-create-edit" onChange={this.update('productName')} value={this.state.productName} type="text" />
          </label>
          <label >price
          <input className="product-create-edit" onChange={this.update('price')} value={this.state.price} type="text" />
          </label>
          <label >dis_price
          <input className="product-create-edit" onChange={this.update('disPrice')} value={this.state.disPrice} type="text" />
          </label>
  
          <label >quantity
          <input className="product-create-edit" onChange={this.update('quantity')} value={this.state.quantity} type="text" />
          </label>
          <select onChange={this.update('category')}>
            <option value="restaurants">Restaurants</option>
            <option value="electronic">Electronic</option>
            <option value="clothing">Clothing</option>
            <option value="FoodDrink ">Food & Drink</option>
            <option value="entertainment ">Entertainment</option>
          </select>
          <label > description
          <textarea className="product-create-edit" onChange={this.update('description')} value={this.state.description}></textarea>
          </label>
          <input type="submit" className="session-submit" value={this.props.formType} />
        </form>
      </div>
    );
  }
}

// export default ProductForm;
export default withRouter(ProductForm);