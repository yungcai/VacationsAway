import React from 'react';
import { Link } from 'react-router-dom';
import { ProtectedRoute } from '../../util/route_util';
import { Route } from 'react-router';
import entitiesReducer from '../../reducers/entities_reducer';
import ReviewIndexContainer from '../reviews/review_index_container';
import ReviewFormContainer from '../reviews/create_form_container'


class StayShow extends React.Component{

    
componentDidMount(){
    this.props.fetchStay(this.props.match.params.stayId),
    this.props.fetchReviews(this.props.match.params.stayId)
}


render(){
    const {stay} = this.props
    return stay ? (
        
        <div className='stay-index-container'>
            
    {/* <div><img className='stay-show-img' src={stay.image}/></div> */}
        
            <div>
            <div><img className='stay-show-img' src={stay.image}/></div>
            <p className='stay-index-item'>PRICE: ${stay.price}</p>
            <p className='stay-index-item'>{stay.description}</p>
            <p className='stay-index-item'>AMENITIES: {stay.amenities}</p>
            <ReviewIndexContainer stay={stay}/>
            <ReviewFormContainer stay={stay}/>
            </div>
            
        </div>

    ) : null
}

}

export default StayShow
