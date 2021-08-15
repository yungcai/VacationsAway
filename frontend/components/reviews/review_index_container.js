import {connect} from 'react-redux'
import ReviewIndex from './review_index'
import { fetchReviews,deleteReview } from '../../actions/review_actions'

const mSTP = (state, ownProps) => {
    
    return {reviews: Object.values(state.entities.reviews),
            users: state.entities.users,

        }
}

const mDTP = dispatch => ({
    fetchReviews: stayId => dispatch(fetchReviews(stayId)),
    deleteReview: reviewId => dispatch(deleteReview(reviewId))
})

export default connect(mSTP, mDTP)(ReviewIndex)