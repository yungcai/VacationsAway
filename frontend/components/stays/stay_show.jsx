import React from 'react';
import { Link } from 'react-router-dom';
import { ProtectedRoute } from '../../util/route_util';
import { Route } from 'react-router';
import entitiesReducer from '../../reducers/entities_reducer';

class StayShow extends React.Component{

    
componentDidMount(){
    this.props.fetchStay(this.props.match.params.stayId)
}


    render(){
        const {stay} = this.props
        return stay ? (
            <div className='stay-index-container'>
                <h1>STAY DETAILS</h1>
                <p className='stay-index-item'>{stay.price}</p>
                <p className='stay-index-item'>{stay.lat}</p>
                <p className='stay-index-item'>{stay.long}</p>
            </div>
        ) : null
    }

}

export default StayShow
