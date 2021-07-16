import { RECEIVE_STAY } from "../actions/stay_actions";
import { RECEIVE_REVIEWS, RECEIVE_REVIEW, REMOVE_REVIEW } from "../actions/review_actions";

const reviewsReducer = (state = {}, action) => {
    Object.freeze(state);
    let nextState = Object.assign({}, state);
    switch (action.type) {
      case RECEIVE_REVIEWS:
        return Object.assign({}, state, action.reviews);
      case RECEIVE_REVIEW:
        debugger
        nextState[action.review.id] = action.review;
        return nextState
      case REMOVE_REVIEW:
        let newState = Object.assign({}, state);
        delete newState[action.reviewId];
        return newState;
      default:
        return state;
    }
  };

  
  export default reviewsReducer;