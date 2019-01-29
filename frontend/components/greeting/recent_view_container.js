import { connect } from 'react-redux';
import RecentView from './recent_view'
import { withRouter } from "react-router-dom";
import { search } from '../../actions/product_actions';

const mapStateToProps = (state, ownprops) => {
  return {
    products: Object.values(state.session.recent)
  };
};

const mapDispatchToProps = dispatch => ({
  search: str => dispatch(search(str))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(RecentView));