import React from 'react';
import { Link } from 'react-router-dom';


class Greeting extends React.Component {
  sessionLinks () {
    return (
        <div className="signin-name">
        <span><i className="far fa-bell"></i></span>
        <Link to="/login" >Sign In</Link>&nbsp; | &nbsp;<Link to="/login" >My Stuff</Link>
          {/* &nbsp;|&nbsp; */}
          {/* <Link to="/signup" className='button'>Sign Up</Link> */}
        </div>
      );
   }
  personalGreeting() {
    let name = this.props.currentUser.fullName.split(' ')[0];
    return(
      <div className="signin-name">
        <span><i className="far fa-bell"></i></span>
        {name}<i className="arrow down"></i>&nbsp; | &nbsp;<Link to="/login" >My Stuff</Link>
          {/* &nbsp;  --  &nbsp; */}
          {/* <button className='log-out-buttom' onClick={this.props.logout}>Log Out</button> */}
        </div>
      );
   }

   
   render() {
     let result = '';
     let result2 = '';
     let cart = '';

      if (this.props.currentUser ) {
          let id = this.props.currentUser.cart.id
        cart = <Link to={`/cart/${id}`} className='header-link'>
          <span> <i className="fas fa-shopping-cart"></i></span>
          Cart </Link>
      } else {

        cart = <Link to='/login' className='header-link'>
          <span> <i className="fas fa-shopping-cart"></i></span>
          Cart </Link>;
      }

     if (this.props.currentUser) {
       result = this.personalGreeting()
       result2 = <button onClick={this.props.logout}>Log Out</button>
       
      } else {
       result = this.sessionLinks();
       result2 = 'Sign Up';

      }

     return (
       <header>
         <div className='upper-header'>
           <Link to="/" className='header-link'>Recently Viewed</Link>
            {cart}
           <Link to="/product/new" className='header-link'>sell</Link>
           <Link to="/" className='header-link'>Help </Link>
           <Link to="/signup" className='header-link'>{result2}</Link>
         </div>
          <div className='header-cover'>
            <div className='header'>
              <Link to="/" className='logo'>COUPON</Link>
              <div className="input-container">

                <form className="search" >
                  <span><i className="fa fa-search" aria-hidden="true"></i></span>
                    <input className='input-location' type="text" placeholder=' Search Coupon' />
                </form>

                <form className="location">
                  <span><i className="fa fa-map-marker"></i></span>
                    <input className='input-location' type="text"  placeholder=' Near Me' />
                </form>
                
               <button className='button-search' ><span><i className="fa fa-search search-button" aria-hidden="true"></i></span></button>
              </div>  
              {result}
            </div>
          </div>
       </header>
     )
  }

};






export default Greeting;