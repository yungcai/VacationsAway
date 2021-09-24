    import React from 'react'
import {Link} from 'react-router-dom'
import DeleteReview from './delete_review'
import EditReview from './edit_review'


class ReviewIndex extends React.Component{

    constructor(props){
        super(props)
        this.state ={
            editing:false
        }
    }

    componentDidMount(){
         //2
        this.props.fetchReviews(this.props.stay.id)
    }

   

    render(){
         //1 //3
        const {reviews, deleteReview} = this.props;
      
        const stayReviews = reviews.filter(review=> review.stay_id === this.props.stay.id)
        
        return (
            <div className='reviews-index-container'>
                 <div><p className='review-header'>REVIEWS</p></div>
                 <div className='reviews-wrapper'>
                {
                    stayReviews.map((review, idx)=> (
                        <div className='reviews' key={idx} >
                        <div><p className='reviews-rating'>RATED {review.star_rating} STARS</p></div>
                        <div><p className='reviews-description'>{review.description}</p></div>
                        <div className='edit-delete'>
                        <div><EditReview user_id={this.props.userId} review={review}/></div>
                        <div><DeleteReview user_id={this.props.userId} review={review} deleteReview={deleteReview} /></div>
                        </div>
                      </div>
                        ))
                } 
                </div>
            </div>
        )
    }
}

export default ReviewIndex

