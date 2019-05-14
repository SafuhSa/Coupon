import React from 'react';
import { login } from '../../actions/session_actions';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };

    this.usernameArr = "SafuhSa".split('');
    this.passwordArr = "password".split('');
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDemo = this.handleDemo.bind(this);
  }

  componentDidMount() {
    this.props.clearErrors();
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.action(user);
  }
  
  handleDemo(e) {
    e.preventDefault();
    this.startDemo.bind(this)()
  }

  startDemo() {
    let { username } = this.state;
    let { password } = this.state;
    
    if (this.usernameArr.length > 0) {
      this.setState(
        { username: username + this.usernameArr.shift() }, () => {
          setTimeout(() =>
          this.startDemo(), 200);
        }
        );
      } else if (this.passwordArr.length > 0) {
        this.setState(
          { password: password + this.passwordArr.shift() }, () => {
            setTimeout(() =>
            this.startDemo(), 200);
          }
          );
        } else {
          this.props.action(this.state);
    };
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
      <div className="login-form-container">
        <form onSubmit={this.handleSubmit} className="login-form-box">
          <h1>Sign in to score great deals!</h1>
          <br />
          <div className='signUp-title'>
            <div className='signUp active'>
              I HAVE AN ACCOUNT
            </div>
            <div className='signUp'>
              {this.props.navLink}
            </div>

          </div>
          <h4 className='errors'>{this.renderErrors()}</h4>
          <div className="login-form">
            <br />
            <label>
              <input type="text"
                placeholder="Username"
                value={this.state.username}
                onChange={this.update('username')}
                className="login-input"
              />
            </label>
            <br />
            <label>
              <input type="password"
                placeholder="Password"
                value={this.state.password}
                onChange={this.update('password')}
                className="login-input"
              />
            </label>
            <br />
              <input className="session-submit" type="submit" value='Sign In' />
              <div className="or-text">
                or
              </div>
              <input type='submit' className="login-demo" onClick={this.handleDemo} value='Demo User' />
          </div>
        </form>
      </div>
    );
  }
}

export default LoginForm;