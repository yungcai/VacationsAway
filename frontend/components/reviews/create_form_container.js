import {connect} from 'react-redux'
import { createReview } from '../../actions/review_actions'
import ReviewForm from './review_form'



const mSTP = state => ({
    review: {
        description: '',
        star_rating: ''
    },
    formType: 'Add Review'
})

const mDTP = dispatch => ({
    action: review => dispatch(createReview(review))
})

export default connect(mSTP, mDTP)(ReviewForm)

