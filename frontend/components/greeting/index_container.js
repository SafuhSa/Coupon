import { connect } from 'react-redux';
import Index from './index'

const mapStateToProps = (props) => {

  return {
    // currentUser: users[session.id]
  };
};

const mapDispatchToProps = dispatch => ({
});

export default connect( mapStateToProps, mapDispatchToProps )(Index);