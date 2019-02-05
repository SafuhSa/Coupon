import React from 'react';
import { Link } from 'react-router-dom';
import SearchContainer from "./search_container";

class Greeting extends React.Component {
  sessionLinks () {
    return (
        <div className="signin-name">
        <span><i className="far fa-bell"></i></span>
        <Link to="/login" >Sign In</Link>&nbsp; | &nbsp;<Link to="/login" >My Stuff</Link>
        </div>
      );
   }
  personalGreeting() {
    let name = this.props.currentUser.fullName.split(' ')[0];
    return(
      <div className="signin-name">
        <span><i className="far fa-bell"></i></span>
        {name}<i className="arrow down"></i>&nbsp; | &nbsp;<Link to="/login" >My Stuff</Link>
        </div>
      );
   }

   showPosition(position) {
   
     let location = { latitude: position.coords.latitude, longitude: position.coords.longitude }
     this.props.getlocation(location);
   }

handlelocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(this.showPosition.bind(this));
  } //else {
    // x.innerHTML = "Geolocation is not supported by this browser.";
  // }
}


   render() {
     let result = '';
     let result2 = '';

     if (this.props.currentUser) {
       result = this.personalGreeting()
       result2 = <button onClick={this.props.logout}>Log Out</button>
       
      } else {
       result = this.sessionLinks();
       result2 = 'Sign Up';

      }

     return (
       <header className='header-color'>
         <div className='whole-header' >
         <div className='upper-header'>
          <div className='upper-header-width'>
           <Link to="/recentViews" className='header-link'>Recently Viewed</Link>
           <Link to={'/cart'} className='header-link'>
             <span> <i className="fas fa-shopping-cart"></i></span>
             Cart </Link>
           <Link to="/product/new" className='header-link'>sell</Link>
           <Link to="/" className='header-link'>Help </Link>
           <Link to="/signup" className='header-link'>{result2}</Link>
          </div>
         </div>


            <div className='header'>
             <Link to="/" className='logo'>COUPON</Link> 
              <div className="input-container">
               <SearchContainer />
            

               <form className="location" onSubmit={this.handlelocation.bind(this)} >
                  <span><i className="fa fa-map-marker"></i></span>
                    <input className='input-location' type="text"  placeholder=' Near Me' />
                <button className='button-search'  ><span><i className="fa fa-search search-button" aria-hidden="true"></i></span></button>
                </form>
               {/* onClick={this.handlelocation.bind(this)} */}
              </div>  
              {result}
            </div>
          </div>
       </header>
     )
  }

};






export default Greeting;