import React from 'react';
import { withRouter } from 'react-router-dom';

class ProductForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = this.props.product;
    this.handleSubmit = this.handleSubmit.bind(this);
    this.photos = []
  }

    componentDidUpdate(prevProps) {
      if (prevProps.product != this.props.product) {
        this.setState(this.props.product);
      }
    }

  update(field) {
    return (e) => {
      this.setState({ [field]: e.target.value });
    };
  }

  handleSubmit(e) {
    e.preventDefault();

    const formData = new FormData();
    formData.append('product[productName]', this.state.productName);
    formData.append('product[price]', this.state.price);
    formData.append('product[disPrice]', this.state.disPrice);
    formData.append('product[description]', this.state.description);
    formData.append('product[quantity]', this.state.quantity);
    formData.append('product[category]', this.state.category);


    if (this.state.photoFile) {
      // formData.append('product[photo]', this.state.photoFile);

      for (let i = 0; i < this.state.photoFile.length; i++) {
        formData.append('product[photos][]', this.state.photoFile[i]);
      }
    }
    this.props.action(formData, this.props.match.params.productId).then(() => this.props.history.push('/'));
  }

  handleFile(e) {
    let result = [e.target.files[0]]
    // if (this.state.photoFile) {
    //   this.setState((state, props) => ({ photoFile: state.photoFile.concat(result) }))
    // } else {
    //   this.setState({photoFile: [e.target.files[0]] })
    // }

    const files = e.target.files;
    const reader = new FileReader();

    reader.onloadend = () => {
      if (this.state.photoFile) {
        this.setState((state, props) => ({ photoUrl: reader.result, photoFile: state.photoFile.concat(result)}));
      } else {
        this.setState({ photoFile: result })
      }
    }


    if (files) {
      for (let i = 0; i < files.length; i++) {
        reader.readAsDataURL(files[i]);
      }
    } else {
      this.setState({ photoUrl: "", photoFile: null });
    }
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
    if (!this.state) {
      return null
    }
    const preview = this.state.photoUrl ? <img src={this.state.photoUrl}/> : null;

    return (
      <div className='create-edit-form'>
        {this.renderErrors()}
        <form onSubmit={this.handleSubmit}>
          <label > product Name
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
          <input type="file" onChange={this.handleFile.bind(this)} multiple />
          <h3>Image preview</h3>
          {preview}
          <input type="submit" className="session-submit" value={this.props.formType} />
        </form>
      </div>
    );
  }
}

// export default ProductForm;
export default withRouter(ProductForm);