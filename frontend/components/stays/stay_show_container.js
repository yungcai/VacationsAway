import { connect } from "react-redux";
import { fetchReview, fetchReviews } from "../../actions/review_actions";
import { fetchStay } from "../../actions/stay_actions";
import StayShow from "./stay_show";


const mSTP = (state, ownProps) => {
  
    return {
    stayId: ownProps.match.params.stayId,
    stay: state.entities.stays[ownProps.match.params.stayId],
    stays: Object.values(state.entities.stays),
    reviews: Object.values(state.entities.reviews)
    }
}

const mDTP = dispatch => ({
    fetchStay: stayId => dispatch(fetchStay(stayId)),
    fetchReviews: stayId => dispatch(fetchReviews(stayId))
})

export default connect(mSTP, mDTP)(StayShow)