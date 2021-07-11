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
            <div>
                <p>{stay.price}</p>
                <p>{stay.lat}</p>
                <p>{stay.long}</p>
            </div>
        ) : null
    }

}

export default StayShow
