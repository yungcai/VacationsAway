import { connect } from "react-redux";
import { fetchReview, fetchReviews } from "../../actions/review_actions";
import { fetchStay } from "../../actions/stay_actions";
import StayShow from "./stay_show";


const mSTP = (state, ownProps) => {

    return {
    stay: state.entities.stays[ownProps.match.params.stayId],
    stays: Object.values(state.entities.stays)
    }
}

const mDTP = dispatch => ({
    fetchStay: stayId => dispatch(fetchStay(stayId)),
    fetchReviews: stayId => dispatch(fetchReviews(stayId))
})

export default connect(mSTP, mDTP)(StayShow)