import React from 'react';
import { Link } from 'react-router-dom';
import { ProtectedRoute } from '../../util/route_util';
import { Route } from 'react-router';
import entitiesReducer from '../../reducers/entities_reducer';
import ReviewIndexContainer from '../reviews/review_index_container';
import ReviewFormContainer from '../reviews/create_form_container'
import StayMap from '../stay_map/stay_map';
import ReservationContainer from '../reservations/reservation_container';
import { withRouter } from "react-router-dom";




// const StayShow = ({stay}) => {
//     return(
//         <div>{stay.price}</div>
//     )
// }



class StayShow extends React.Component{

    constructor(props){
        super(props)
     
    }


    componentDidMount(){
       
    this.props.fetchStay(this.props.match.params.stayId)
    }




render(){

    const {stay} = this.props
    return stay ? (
        
        <div className='stay-index-container'>
        
            <div className='show-wrapper'>

                <div className='show-images'>
                    <div>
                        <img className='stay-show-img' src={stay.image}/>
                    </div>
                    <div className='small-images'>
                        <div className='left-images'>
                            <div className='top-left'><img className='img-1' src={stay.image}/></div>
                            <div className='bott-left'><img className='img-2' src={stay.image}/></div>
                        </div>
                        <div className='right-images'>
                            <div className='top-right'><img className='img-3' src={stay.image}/></div>
                            <div className='bott-right'><img  className='img-4' src={stay.image}/></div> 
                        </div>
                    </div>
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
                    <div className='review-form'>
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
