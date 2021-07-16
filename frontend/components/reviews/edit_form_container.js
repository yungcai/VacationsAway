import {connect} from 'react-redux'
import EditForm from './edit_form'
import { updateReview } from '../../actions/review_actions'



const mSTP = (state, ownProps) => ({
    review: state.entities.reviews[ownProps.match.params.reviewId],
    formType: 'Update Review'
})

const mDTP = dispatch => ({
    action: review => dispatch(updateReview(review))
})

export default connect(mSTP, mDTP)(EditForm)


