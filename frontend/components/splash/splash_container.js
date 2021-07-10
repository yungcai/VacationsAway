import { connect } from "react-redux";
import { fetchStays } from "../../actions/stay_actions";
import Splash from "./splash";
import { withRouter } from "react-router-dom";

const mSTP = (state)=> ({
    stays: Object.values(state.entities.stays)
    // stay: state.entities.stays[ownProps.match.params.stayId]

})

const mDTP = dispatch => ({
    fetchStays: () => dispatch(fetchStays())
})

export default connect(mSTP, mDTP)(Splash)