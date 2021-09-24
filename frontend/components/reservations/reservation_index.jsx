import React from 'react';
import { Link } from 'react-router-dom'
import { withRouter } from "react-router-dom";


class ReservationIndex extends React.Component{

    constructor(props){
        super(props)
    }

    componentDidMount(){
       
        this.props.fetchReservations(this.props.currentUser.id)
        this.props.fetchStays();
     
    }

    //   componentDidUpdate(prevProps){
    //     if (this.props.reservation.id !== prevProps.reservation.id) {
    //       this.props.fetchReservations(this.props.currentUser.id);
    //     }
    //   }
 
    render(){ 
      
        return(
                    <div >
                        {
                            this.props.reservations.map((reservation) => (
                                <div className='reservation-container' key={reservation.id} >
                                    <div className='reservation-top'>
                                        <div className='reservation-description'>{reservation.description}</div>
                                        <div className='reservation-dates'>Reservation dates: {reservation.start_date.split('T')[0]} to {reservation.end_date.split('T')[0]}</div>
                                        
                                    </div>
                                    <br></br>
                                    <div className='reservation-bottom'>
                                        <button className='stay-btn' onClick={() => this.props.history.push(`stays/${reservation.stay_id}`)}>YOUR STAY</button>
                                        <button className='delete-reservation-btn' onClick={() => this.props.deleteReservation(reservation.id)}>DELETE RESERVATION</button>
                                    </div>
                                
                                </div>
                            ))
                        }
                    </div>
                

        )
    }

}

export default withRouter(ReservationIndex)