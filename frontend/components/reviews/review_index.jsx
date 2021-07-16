import React from 'react'

class ReviewIndex extends React.Component{

    constructor(props){
        super(props)
    }

    componentDidMount(){
         //2
        this.props.fetchReviews(this.props.stay.id)
    }

    render(){
         //1 //3
        const {reviews} = this.props;
      
        const stayReviews = reviews.filter(review=> review.stay_id === this.props.stay.id)
        
        return (
            <div className='reviews-index-container'>
                 <p className='review-header'>REVIEWS</p>
                 <div>
                {
                    
                    stayReviews.map((review, idx)=> (
                        <div key={idx} className='reviews'>
                        <p className='reviews-rating'>RATED {review.star_rating} STARS</p>
                      <p className='reviews-description'>{review.description}</p>
                      <button>EDIT</button>
                      <button>DELETE</button>
                      </div>
                        ))
                }
                </div>
            </div>
        )
    }
}

export default ReviewIndex