import { connect } from 'react-redux';
import RecentView from './recent_view'
import { withRouter } from "react-router-dom";
import { requestRecentView } from "../../actions/product_actions";

const mapStateToProps = (state, ownprops) => {
  return {
    products: Object.values(state.entities.recentView)
  };
};

const mapDispatchToProps = dispatch => ({
  requestRecentView: ()  => dispatch(requestRecentView())
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(RecentView));