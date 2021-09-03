import {connect} from 'react-redux';
import ReservationIndex from './reservation_index';
import { deleteReservation, fetchReservation, fetchReservations } from '../../actions/reservation_actions';
import { fetchStays } from '../../actions/stay_actions';

const mSTP = (state) => {
    return{
    reservations: Object.values(state.entities.reservations),
    currentUser: state.entities.users[state.session.id],
    stays: state.entities.stays
    }
}

const mDTP = dispatch => ({
    deleteReservation: (id) => dispatch(deleteReservation(id)),
    fetchReservations: (userId) => dispatch(fetchReservations(userId)),
    fetchStays: () => dispatch(fetchStays())
})

export default connect(mSTP, mDTP)(ReservationIndex)