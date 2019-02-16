import * as ReviewAPIUtil from '../util/review_api_util';

export const CLEAR_ERRORS = 'CLEAR_ERRORS';
export const RECEIVE_REVIEW_ERRORS = 'RECEIVE_REVIEW_ERRORS';
export const RECEIVE_REVIEW = 'RECEIVE_REVIEW';
export const RECEIVE_REVIEWS = 'RECEIVE_REVIEWS';
export const REMOVE_REVIEW = 'REMOVE_REVIEW';


export const receiveErrors = errors => {
  return ({
    type: RECEIVE_REVIEW_ERRORS,
    errors
  });
}
export const clearErrors = errors => ({
  type: CLEAR_ERRORS,
  errors
})


export const receiveReview = (review) => ({
  type: RECEIVE_REVIEW,
  review
});


export const createReview = (review) => dispatch => {
  debugger
  return ReviewAPIUtil.createReview(review).then((review) =>
    dispatch(receiveReview(review)), err => (
      dispatch(receiveErrors(err.responseJSON))
    ));
};