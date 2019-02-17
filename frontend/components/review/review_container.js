import { connect } from 'react-redux';
import { createReview } from '../../actions/review_actions';
// import { fetchBusiness } from '../../actions/business_actions';
import ReviewForm from './review_form';

const mapStateToProps = ( { session, errors ,entities: { users, products } } ) => {
  return ({
    currentUser: users[session.id],
    errors: errors.review,
    productId: Object.values(products)[0].id,
    formType: 'Write a new review'

  })
};

const mapDispatchToProps = dispatch => ({
  createReview: review => dispatch(createReview(review)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ReviewForm);
