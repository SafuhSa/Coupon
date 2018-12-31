import React from 'react';


class SignUpForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      email: '',
      fullName:'',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDemo = this.handleDemo.bind(this); 
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  componentDidMount() {
    this.props.clearErrors();
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.action(user);
  }

  handleDemo(e) {
    e.preventDefault();
    let demo = { username: "SafuhSa", password: "password" }
    this.props.demoAction(demo)
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
    return <div className="login-form-container">
        <form onSubmit={this.handleSubmit} className="login-form-box">
          <h1>Sign in to score great deals!</h1>
          <br />
          <div className="signUp-title">
            <div className="signUp">{this.props.navLink}</div>
            <div className="signUp active">I'M A NEW CUSTOMER</div>
          </div>
          <h4 className="errors">{this.renderErrors()}</h4>
          <div className="login-form">
            <br />
            <label>
              <input type="text" placeholder="Full name" value={this.state.fullName} onChange={this.update("fullName")} className="login-input" />
            </label>

            <br />
            <label>
              <input type="text" placeholder="Email" value={this.state.email} onChange={this.update("email")} className="login-input" />
            </label>

            <br />
            <label>
              <input type="text" placeholder="Username" value={this.state.username} onChange={this.update("username")} className="login-input" />
            </label>
            <br />
            <label>
              <input type="password" placeholder="Password" value={this.state.password} onChange={this.update("password")} className="login-input" />
            </label>
            <br />
            <input className="session-submit" type="submit" value="Sign Up" />
            <div className="or-text">or</div>
            <input type="submit" className="login-demo" onClick={this.handleDemo} value="Demo User Sign In" />
          </div>
        </form>
      </div>;
  }
}

export default SignUpForm;