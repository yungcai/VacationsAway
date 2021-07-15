import {connect} from 'react-redux'
import { updateReview, fetchReview} from '../../actions/review_actions'
import ReviewForm from './review_form'


// class EditReviewForm extends React.Component {

//     componentDidMount(){
//       this.props.fetchReview(this.props.match.params.reviewId)
//     }
  
//     render() {
      
//       const { action, formType, review } = this.props;
  
//       if (!report) return null;
//       return (
//         <ReviewForm
//           action={action}
//           formType={formType}
//           review={review} />
//       );
//     }
//   }

const mSTP = (state, ownProps) => ({
    review: state.entities.reviews[ownProps.match.params.reviewId],
    formType: 'Edit Review'
})

const mDTP = dispatch => ({
    fetchReview: reviewId => dispatch(fetchReview(reviewId)),
    action: review => dispatch(updateReview(review))
})

export default connect(mSTP, mDTP)(ReviewForm)

