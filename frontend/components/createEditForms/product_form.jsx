import React from 'react';
import { withRouter } from 'react-router-dom';

class ProductForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = this.props.product;
    this.photos = [];
    this.handleSubmit = this.handleSubmit.bind(this);
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

    if (this.state.photoFile.length) {
      // formData.append('product[photo]', this.state.photoFile);
      for (let i = 0; i < this.state.photoFile.length; i++) {
        formData.append('product[photos][]', this.state.photoFile[i]);
      }
    }
    this.props.action(formData, this.props.match.params.productId).then(() => this.props.history.push('/'));
  }

  handleFile(e) {
    // let result = [e.target.files[0]]
    let result = Object.values(e.target.files);

    var files = e.target.files;
    let that = this
    
    for (let i = 0; i < files.length; i++) {
      let file = files[i];
      let reader = new FileReader();
      reader.onload = function (e) { //that.state.photoFile.concat(result)

        let phtfile
        if(i === 0) {
          phtfile = that.state.photoFile.concat(result)
        } else  {
          phtfile = that.state.photoFile
        }
        
        that.setState({ photoUrl: that.state.photoUrl.concat([reader.result]), photoFile: phtfile});
      };
      reader.readAsDataURL(file);
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
    if (!this.state) return null;
    
    let preview = [];
    if (this.state.photoUrl) {
      for (let i = 0; i < this.state.photoUrl.length; i++) {
        const el = this.state.photoUrl[i];
        preview.push(<ul className='image-preview' key={i}><img  src={el} /></ul> )
      }
    }
    
    return (
      <div className='create-edit-product-container'>
        <h1>Generate more sales list your products</h1>
        <h4 className='errors'>{this.renderErrors()}</h4>
        <form onSubmit={this.handleSubmit}>
          <label className='product-label'> <h3>Product Title:</h3>
          <input className="product-create-edit-input" onChange={this.update('productName')} value={this.state.productName} type="text" />
          </label>
          <label className='product-label'><h3>Original Price:</h3>
          <input className="product-create-edit-input" onChange={this.update('price')} value={this.state.price} type="text" />
          </label>
          <label className='product-label'><h3 >DIS Price:</h3>
          <input className="product-create-edit-input" onChange={this.update('disPrice')} value={this.state.disPrice} type="text" />
          </label>
          <label className='product-label'><h3>Quantity Aval:</h3>
          <input className="product-create-edit-input" onChange={this.update('quantity')} value={this.state.quantity} type="text" />
          </label>
          <label className='product-label'><h3>Description:</h3>
          <textarea className="product-create-edit-input" onChange={this.update('description')} value={this.state.description}></textarea>
          </label>
          <label className='product-label'><h3>category:</h3>
            <select className="category-selector" onChange={this.update('category')}>
              <option value="" hidden>Please Choose...</option>
            <option value="restaurants">Restaurants</option>
            <option value="electronic">Electronic</option>
            <option value="clothing">Clothing</option>
            <option value="FoodDrink ">Food & Drink</option>
            <option value="entertainment ">Entertainment</option>
          </select>
          </label>

          <label className='product-label'><h3>Images:</h3>
            <label htmlFor="file" className='images-label'>&nbsp; Choose a file
            <input className='images-input' type="file" onChange={this.handleFile.bind(this)} multiple />
             </label>
          </label>

          <div className='images-preview-container'> {preview} </div>
          <input type="submit" className="session-submit" value={this.props.formType} />
        </form>
      </div>
    );
  }
}

export default withRouter(ProductForm);