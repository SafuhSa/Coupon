import { connect } from 'react-redux';
// import { createReview } from '../../actions/review_actions';
// import { fetchBusiness } from '../../actions/business_actions';
import ReviewForm from './review_form';

const mapStateToProps = state => {
  return ({
    productId: Object.values(state.entities.products)[0].id,
    formType: 'Write a'

  })
};

const mapDispatchToProps = dispatch => ({
  action: review => dispatch(createReview(review)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ReviewForm);
