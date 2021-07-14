import { RECEIVE_RESERVATION, RECEIVE_RESERVATIONS, REMOVE_RESERVATION } from "../actions/reservation_actions";

const reservationsReducer = (state={}, action)=>{
    Object.freeze(state);
    switch(action.type){
        case RECEIVE_RESERVATIONS:
            return action.reservations;
        case RECEIVE_RESERVATION:
            return Object.assign({}, state, {[action.reservation.id]: action.reservation});
        case REMOVE_RESERVATION:
            let newState = Obect.assign({}, state);
            delete newState[action.reservationId];
            return newState;
        default:
            return state;
    }
}

export default reservationsReducer;