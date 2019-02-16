import { connect } from 'react-redux';
import { createReview } from '../../actions/review_actions';
// import { fetchBusiness } from '../../actions/business_actions';
import ReviewForm from './review_form';

const mapStateToProps = ( { session, entities: { users, products } } ) => {
  return ({
    currentUser: users[session.id],
    productId: Object.values(products)[0].id,
    formType: 'Write a'

  })
};

const mapDispatchToProps = dispatch => ({
  createReview: review => dispatch(createReview(review)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ReviewForm);
