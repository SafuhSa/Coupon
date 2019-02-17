import { connect } from 'react-redux';
import ReviewIndex from './review_index';
import { deleteReview, updateReview } from "../../actions/review_actions";

const mapStateToProps = (state, ownProps) => {
  return ({
    errors: state.errors.review,
    reviews: ownProps.review,
    userId: state.session.id
  });
}

const mapDispatchToProps = dispatch => ({
  deleteReview: id => dispatch(deleteReview(id)),
  updateReview: item => dispatch(updateReview(item))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ReviewIndex);