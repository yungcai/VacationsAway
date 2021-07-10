import { connect } from "react-redux";
import { fetchStay } from "../../actions/stay_actions";
import StayShow from "./stay_show";


const mSTP = (state, ownProps) => ({
    stay: state.entities.stays[ownProps.match.params.stayId]
})

const mDTP = dispatch => ({
    fetchStay: stayId => dispatch(fetchStay(stayId))
})

export default connect(mSTP, mDTP)(StayShow)