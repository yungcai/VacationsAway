import React from 'react'
import {Link} from 'react-router-dom'
import DeleteReview from './delete_review'


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
                 <p className='review-header'>REV</p>
                 <div>
                {
                    stayReviews.map((review, idx)=> (
                        <div key={idx} className='reviews'>
                        <p className='reviews-rating'>RATED {review.star_rating} STARS</p>
                      <p className='reviews-description'>{review.description}</p>
                      <div className='edit-link'><Link className='edit-link2'  to={`/reviews/${review.id}/edit`}>EDIT</Link></div>
                      <DeleteReview review={review} deleteReview={deleteReview} />
                      </div>
                        ))
                } 
                </div>
            </div>
        )
    }
}

export default ReviewIndex

