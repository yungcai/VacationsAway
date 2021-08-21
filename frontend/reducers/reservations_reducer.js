import { RECEIVE_RESERVATION, RECEIVE_RESERVATIONS, REMOVE_RESERVATION } from "../actions/reservation_actions";

const reservationsReducer = (state = {}, action) => {
    Object.freeze(state);
    let newState = Object.assign({}, state)
    switch(action.type){
        case RECEIVE_RESERVATIONS:
            return action.reservations;
        case RECEIVE_RESERVATION:
            newState[action.reservation.id] = action.reservation
            return newState
        case REMOVE_RESERVATION: 
            delete newState[action.reservationId.id]
            return newState
        default: 
            return state
    }
}

export default reservationsReducer;