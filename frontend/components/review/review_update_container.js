import { connect } from 'react-redux';
import { createReview } from '../../actions/review_actions';
import ReviewForm from './review_form';

const mapStateToProps = ({ session, errors, entities: { users, products } }) => {
  debugger
  return ({
    currentUser: users[session.id],
    errors: errors.review,
    productId: Object.values(products)[0].id,
    formType: 'Change a current review'
  })
};

const mapDispatchToProps = dispatch => ({
  createReview: review => dispatch(createReview(review)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ReviewForm);
