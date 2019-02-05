import { connect } from 'react-redux';

import { logout } from '../../actions/session_actions';
import { getlocation } from "../../actions/product_actions";
import Greeting from './greeting';

const mapStateToProps = ({ session, entities: { users } }) => {
  
  return {
    currentUser: users[session.id]
  };
};

const mapDispatchToProps = dispatch => ({
  getlocation: location => dispatch(getlocation(location)),
  logout: () => dispatch(logout())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Greeting);