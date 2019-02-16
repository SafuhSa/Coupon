import { createReview } from "../util/review_api_util";
export const RECEIVE_REVIEW = 'RECEIVE_REVIEW';
export const RECEIVE_REVIEWS = 'RECEIVE_REVIEWS';
export const RECEIVE_REVIEW_ERRORS = 'RECEIVE_REVIEW_ERRORS';
export const REMOVE_REVIEW = 'REMOVE_REVIEW';


export const receiveReview = (review) => ({
  type: RECEIVE_REVIEW,
  review
});
// review

export const createReview = (review) => dispatch => {
  return reviewAPIUtil.createReview(review).then((review) =>
    dispatch(receiveReview(review)), err => (
      dispatch(receiveErrors(err.responseJSON))
    ));
};