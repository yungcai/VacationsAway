import React from 'react';
import { withRouter } from 'react-router-dom';

class Reservation extends React.Component {
    constructor(props) {
        super(props);

        this.newState = Object.assign({}, this.props.reservation)
        this.state = this.props.reservation
        this.handleInput = this.handleInput.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    
    handleDate(field) {
        return (e) => {
            let date = new Date(e.target.value)   
            let utc = date.getTime() + (date.getTimezoneOffset() * 60000)
            this.setState({
                [field]: new Date(utc + (3600000 * 10))
            });
        };
    }

    handleSubmit(e){
        e.preventDefault();
        if (this.props.currentUser){
            if (this.state.end_date < this.state.start_date) return null
            const reservations = Object.assign({}, this.state, {stay_id: this.props.stayId})
            this.props.createReservation(reservations).then(this.props.history.push('/reservations')) 
            this.setState(this.newState)
        } else 
        this.props.openModal('login')
    }

    handleInput(field){
        return (e) => {
        this.setState({
            [field]: e.target.value,
            }); 
        };
    }
    
    render(){
        let days = 0;
        const { start_date, end_date} = this.state;
        if(start_date && end_date) {
            let diff_time = end_date.getTime() - start_date.getTime();
            days = diff_time / (1000 * 3600 * 24);
        }

        return (
            <div className='reservation-wrapper'>
                <div className='reservation-price'>
                    <p >${this.props.stay.price} / night</p>
                </div>
                <div>
                    <form onSubmit={this.handleSubmit} >
                        <div className='reservation-input'>
                            <input type='date'
                                onChange={this.handleDate('start_date')} 
                                min={new Date().toISOString().split('T')[0]}
                                className='reservation-start-date'
                            />
                            <input type='date'
                                onChange={this.handleDate('end_date')} 
                                min={new Date().toISOString().split('T')[0]}
                                className='reservation-end-date'
                            />
                        </div> 

                        <button className='reserve-btn' type='submit'>Reserve</button>
                    </form>
                </div>
            </div>
        )
    }
    
}

export default withRouter(Reservation)