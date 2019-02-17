import { connect } from 'react-redux';
import { createReview } from '../../actions/review_actions';
import ReviewForm from './review_form';

const mapStateToProps = ({ session, errors, entities: { users, products } }, ownProps ) => {
  return ({
    currentUser: users[session.id],
    errors: errors.review,
    productId: ownProps.productId,
    formType: 'Write a new review'

  })
};

const mapDispatchToProps = dispatch => ({
  action: review => dispatch(createReview(review)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ReviewForm);
