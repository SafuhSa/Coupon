import { connect } from 'react-redux';
import { withRouter } from "react-router-dom";
import { logout } from '../../actions/session_actions';
import { getlocation, search } from "../../actions/product_actions";
import Greeting from './greeting';

const mapStateToProps = ({ session, entities: { users } }) => {

  return {
    currentUser: users[session.id],
    currlocation: session.city
  };
};

const mapDispatchToProps = dispatch => ({
  getlocation: location => dispatch(getlocation(location)),
  search: str => dispatch(search(str)),
  logout: () => dispatch(logout())
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Greeting));