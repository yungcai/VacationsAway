import {connect} from 'react-redux';
import ReservationIndex from './reservation_index';
import { deleteReservation, fetchReservation, fetchReservations } from '../../actions/reservation_actions';

const mSTP = (state) => ({
    reservations: Object.values(state.entities.reservations),
    currentUser: state.entities.users[state.session.id]
})

const mDTP = dispatch => ({
    deleteReservation: (id) => dispatch(deleteReservation(id)),
    fetchReservations: () => dispatch(fetchReservations()),
    fetchReservation: (user_id) => dispatch(fetchReservation(user_id)),
})

export default connect(mSTP, mDTP)(ReservationIndex)

