import React from 'react';
import { Link } from 'react-router-dom';
import { ProtectedRoute } from '../../util/route_util';
import { Route } from 'react-router';
import entitiesReducer from '../../reducers/entities_reducer';
import ReviewIndexContainer from '../reviews/review_index_container';
import ReviewFormContainer from '../reviews/create_form_container'
import StayMap from '../stay_map/stay_map';
import ReservationContainer from '../reservations/reservation_container';


class StayShow extends React.Component{

    
componentDidMount(){
    this.props.fetchStay(this.props.match.params.stayId),
    this.props.fetchReviews(this.props.match.params.stayId)
}


render(){
    
    const {stay} = this.props
    return stay ? (
        
        <div className='stay-index-container'>
        
            <div className='show-wrapper'>

                <div className='show-images'>
                    <img className='stay-show-img' src={stay.image}/>
                </div>

                <div className='show-middle'>
                    <div className='stay-details'>
                        <p className='stay-index-item'>PRICE: ${stay.price}</p>
                        <p className='stay-index-item'>{stay.description}</p>
                        <p className='stay-index-item'>AMENITIES: {stay.amenities}</p>
                    </div>
                    <div className='reservation-form'>
                    <ReservationContainer stay={stay} stayId={stay.id}/>
                    </div>
                </div>
    
                <div className='review-wrapper'>
                    <div>
                        <ReviewIndexContainer stay={stay}/>
                    </div>
                    <div>
                        <ReviewFormContainer stay={stay}/> 
                    </div>
                    
                </div>
                    <br/>
                <div className='show-map'>
                    <StayMap stay={ this.props.stay} stays={this.props.stays} />
                </div>
            </div>
        </div>

    ) : null
}

}

export default StayShow
