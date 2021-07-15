import React from 'react'


class ReviewForm extends React.Component{

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
        debugger
        const stayReviews = reviews.filter(review=> review.stay_id === this.props.stay.id)
        
        return (
            <div>
                {
                    stayReviews.map(review=> (
                       <p>{review.description}</p>
                        ))
                }
            </div>
        )
    }
}

export default ReviewForm