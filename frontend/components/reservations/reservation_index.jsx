import React from 'react';
import { Link } from 'react-router-dom'
import { withRouter } from "react-router-dom";

class ReservationIndex extends React.Component{

    constructor(props) {
        super(props)
    }

    componentDidMount(){
    }
 
    render(){ 
       
        return(
    
                    <div >
                        {
                            this.props.reservations.map((reservation, idx) => (
                                <div className='reservation-container' key={idx} >
                                    <div className='reservation-top'>
                                        <h1>{reservation.description}</h1>
                                        <h2>Reservation dates: {reservation.start_date.split('T')[0]} to {reservation.end_date.split('T')[0]}</h2>
                                    </div>
                                    <div className='reservation-bottom'>
                                        <button onClick={() => this.props.history.push(`stays/${reservation.stay_id}`)}>YOUR STAY</button>
                                        <button onClick={() => this.props.deleteReservation(reservation.id)}>DELETE RESERVATION</button>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                

        )
    }

}

export default withRouter(ReservationIndex)