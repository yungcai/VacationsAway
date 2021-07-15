import {connect} from 'react-redux'
import ReviewIndex from './review_index'
import { fetchReviews } from '../../actions/review_actions'

const mSTP = state => {
    
    return {reviews: Object.values(state.entities.reviews)}
}

const mDTP = dispatch => ({
    fetchReviews: stayId => dispatch(fetchReviews(stayId))
})

export default connect(mSTP, mDTP)(ReviewIndex)