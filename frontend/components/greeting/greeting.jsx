import React from 'react';
import { Link } from 'react-router-dom';


class Greeting extends React.Component {
  sessionLinks () {
    return (
        <div className="login-signup">
          <Link to="/login" className='button'>Sign In</Link>
          &nbsp;|&nbsp;
          <Link to="/signup" className='button'>Sign Up</Link>
        </div>
      );
   }
  personalGreeting() {
    let name = this.props.currentUser.fullName.split(' ')[0];
    return(
      <div className="login-signup">
          <h2 className="header-name">Hi, {name} !</h2>
          &nbsp;  --  &nbsp;
          <button className='log-out-buttom' onClick={this.props.logout}>Log Out</button>
        </div>
      );
   }

   
   render() {
    // debugger
     let result = this.props.currentUser ? this.personalGreeting() : this.sessionLinks();
     return (
       <header>
         <Link to="/" className='logo'><h1>COUPON</h1> </Link>
         <div className="input-container">
           <form className="search" >
             <span><i className="fa fa-search" aria-hidden="true"></i> </span>
           <input  type="text" placeholder=' Search Coupon' />
          </form>

           <form className="location">
             <span><i className="fa fa-map-marker"></i></span>
           <input  type="text" placeholder=' Near Me' />
           </form>
         </div>  
         {result}
       </header>
     )
  }

};






export default Greeting;