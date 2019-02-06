import React from 'react';
import { Link } from 'react-router-dom';
import SearchContainer from "./search_container";

class Greeting extends React.Component {
  constructor(props) {
    super(props)
    this.state = { queryString: ''}

    this.showPosition = this.showPosition.bind(this)
    this.handlelocation = this.handlelocation.bind(this);
    this.updateQueryString = this.updateQueryString.bind(this);
  }
  // componentWillMount() {
  //   debugger
  // }

// componentDidMount() {
//   this.setState({ queryString: this.props.location.search.split('=')[1] })
// }
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

  updateQueryString(e) {
    e.preventDefault();
    this.setState({ queryString: e.target.value })
  }
  
   showPosition(position) {
     let location = { latitude: position.coords.latitude, longitude: position.coords.longitude }
     debugger
     this.props.getlocation(location).then(() => {
       location['city'] = this.props.currlocation;
       let city = this.get_city_db(location);
       debugger
      this.props.search(city).then(() => {
        this.props.history.push(`/city?=${city}`);
      });
    });
  }
    

  handlesubmit(e) {
    e.preventDefault();
    let city = this.get_city_db({ city: this.state.queryString });
    if(city) {
      this.props.search(city).then(() => {
        this.props.history.push(`/city?=${city}`);
      })
    }
  }

  check_existence(str) {
    
    let arr = ["san francisco", "austin", "los angeles", "boston", 'new york'];
    if (arr.includes(str.toLowerCase())) {
      return str.toLowerCase();
    } else {
      return false
    } 
  }

  get_city_db(hash) {
    if (hash.latitude) {
     let lat = hash.latitude
     let lon = hash.longitude
      if (Math.abs(37.7749 - Math.abs(lat)) < 2 && Math.abs(122.4194 - Math.abs(lon))) {
        return "san francisco";
      }
      return "austin";
    } else {
      if (this.check_existence(hash.city)) {
        return this.check_existence(hash.city);
      } else {
        alert('please type one of these cities ("san francisco", "austin", "los angeles", "boston", "new york")')
        return false
      }
    }
  }
    
    handlelocation(e) {
      e.preventDefault();

      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(this.showPosition.bind(this));
      } else {
        alert("Unable to retrieve your location, Please type in your location!! ");
      }
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
            

               <form className="location" onSubmit={this.handlesubmit.bind(this)} >
                  <span><i className="fa fa-map-marker"></i></span>
                 <input className='input-location' type="text" placeholder='try San Francisco' onChange={this.updateQueryString.bind(this)}   />
                {/* <button className='button-search'  ><span><i className="fa fa-search search-button" aria-hidden="true"></i></span></button> */}
                </form>
                 <button className='button-search' onClick={this.handlelocation}  ><span><i className="fas fa-search-location search-button" aria-hidden="true"></i></span></button>
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