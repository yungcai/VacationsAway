import {connect} from 'react-redux'
import Reservation from './reservation'
import { createReservation } from '../../actions/reservation_actions'
import { openModal } from '../../actions/modal_actions'
import {login} from '../../actions/session_actions'


const mSTP = (state, ownProps) => ({    
    reservation: {
        start_date: null,
        end_date: null,
        user_id: state.session.id
    }, 
    currentUser: state.entities.users[state.session.id],
})

const mDTP = dispatch => ({
    openModal: (e) => dispatch(openModal(e)),
    login: (user) => dispatch(login(user)),
    createReservation: (formData) => dispatch(createReservation(formData))
})

export default connect(mSTP, mDTP)(Reservation)