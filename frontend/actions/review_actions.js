import * as ReviewAPIUtil from "../util/review_api_util";


export const RECEIVE_REVIEWS = "RECEIVE_REVIEWS";
export const RECEIVE_REVIEW = "RECEIVE_REVIEW";
export const REMOVE_REVIEW = "REMOVE_REVIEW";



const receiveReviews = ({reviews, users}) => ({
  type: RECEIVE_REVIEWS,
  reviews,
  users
});

const receiveReview = ({review, user}) => ({
  type: RECEIVE_REVIEW,
  review,
  user
});



const removeReview = reviewId => ({
  type: REMOVE_REVIEW,
  reviewId
});


export const fetchReviews = stayId => dispatch => {
  return ReviewAPIUtil.fetchReviews(stayId).then(reviews =>
    dispatch(receiveReviews(reviews))
  );
};

// export const fetchReview = (reviewId) => dispatch => {
//   return ReviewAPIUtil.fetchReview(reviewId).then(review =>
//     dispatch(receiveReview(review))
//   );
// };



export const createReview = (review) => dispatch => {
  return ReviewAPIUtil.createReview(review).then(
    review => dispatch(receiveReview(review)),
  );
};

export const updateReview = (review) => dispatch => {
  return ReviewAPIUtil.updateReview(review).then(
    review => dispatch(receiveReview(review))
  );
};

export const deleteReview = (reviewId) => dispatch => {
  return ReviewAPIUtil.deleteReview(reviewId).then(() =>
    dispatch(removeReview(reviewId))
  );
};