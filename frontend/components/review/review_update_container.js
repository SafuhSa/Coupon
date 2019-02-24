import { connect } from 'react-redux';
import { updateReview } from '../../actions/review_actions';
import ReviewForm from './review_form';

const mapStateToProps = ({ session, errors, entities: { users, products } }, ownProps) => {

  return ({
    currentUser: users[session.id],
    errors: errors.review,
    productId: Object.values(products)[0].id,
    formType: 'update review',
    review: ownProps.review
  })
};

const mapDispatchToProps = dispatch => ({
  action: review => dispatch(updateReview(review)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ReviewForm);
