import {connect} from 'react-redux'



const mSTP = (state, ownProps) => ({
    review: {
        description: '',
        star_rating: ''
    },
    stay: ownProps.stay,
    formType: 'Add Review'
})

const mDTP = dispatch => ({
    action: review => dispatch(createReview(review))
})

export default connect(mSTP, mDTP)(ReviewForm)


