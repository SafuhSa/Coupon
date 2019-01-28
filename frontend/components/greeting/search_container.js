import { connect } from 'react-redux';
import Search from './search'
import { withRouter } from "react-router-dom";
import {search}  from '../../actions/product_actions';

const mapStateToProps = (props) => {
  return {
    
  };
};

const mapDispatchToProps = dispatch => ({
  search: str => dispatch(search(str))
});

export default withRouter( connect(mapStateToProps, mapDispatchToProps)(Search));