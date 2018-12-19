import React from 'react';
import { Link } from 'react-router-dom';


class Greeting extends React.Component {
  sessionLinks () {
    return (
        <div className="signin-name">
        <Link to="/login" >Sign In</Link>
          {/* &nbsp;|&nbsp; */}
          {/* <Link to="/signup" className='button'>Sign Up</Link> */}
        </div>
      );
   }
  personalGreeting() {
    let name = this.props.currentUser.fullName.split(' ')[0];
    return(
      <div className="signin-name">
          <h2>{name} !</h2>
          {/* &nbsp;  --  &nbsp; */}
          {/* <button className='log-out-buttom' onClick={this.props.logout}>Log Out</button> */}
        </div>
      );
   }

   
   render() {
     let result = '';
     let result2 = '';
     if (this.props.currentUser) {
       result = this.personalGreeting()
       result2 = <button onClick={this.props.logout}>Log Out</button>
      } else {
       result = this.sessionLinks();
       result2 = <Link to="/signup">Sign Up</Link>
      }
    //  let result = this.props.currentUser ? this.personalGreeting() : this.sessionLinks();
     return (
       <header>
         <div className='upper-header'>
           <Link to="/" className='header-link'>Recently Viewed</Link>
           <Link to="/" className='header-link'>Cart </Link>
           <Link to="/product/new" className='header-link'>sell</Link>
           <Link to="/" className='header-link'>Help </Link>
           <Link to="/signup" className='header-link'>{result2}</Link>
         </div>
         <div className='header'>
         <Link to="/" className='logo'>COUPON</Link>
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
         </div>
       </header>
     )
  }

};






export default Greeting;