import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from "react-router-dom";

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = { queryString: "" };
  }

  updateQueryString(e) {
    this.setState({ queryString: e.target.value });
  }


  handleSubmit(e) {
    e.preventDefault();
    this.props.search(this.state.queryString)
    .then( () => {
      this.props.history.push(`/search?=${this.state.queryString}`);
      this.setState({ queryString: "" });
    });
  }


  render() {
    return <form className="search" onSubmit={this.handleSubmit.bind(this)}>
        <span>
          <i className="fa fa-search" aria-hidden="true" />
        </span>
        <input className="input-location" type="text" placeholder=" Search Coupon" value={this.state.queryString} onChange={this.updateQueryString.bind(this)} />
      </form>;
  }
}

export default Search;
// export default withRouter(Search);
