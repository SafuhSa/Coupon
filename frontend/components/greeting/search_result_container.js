import { connect } from 'react-redux';
import SearchResult from './search_result'
import { withRouter } from "react-router-dom";
import { search } from '../../actions/product_actions';

const mapStateToProps = (state, ownprops) => {
  return {
    products: Object.values(state.entities.products)
  };
};

const mapDispatchToProps = dispatch => ({
  search: str => dispatch(search(str))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SearchResult));