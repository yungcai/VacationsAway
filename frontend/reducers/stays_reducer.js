import { RECEIVE_STAY, RECEIVE_STAYS, REMOVE_STAY } from "../actions/stay_actions";


const staysReducer = (state={}, action) => {

    Object.freeze(state);
    switch(action.type){
        case RECEIVE_STAYS:
            return Object.assign({}, state, action.stays);
        case RECEIVE_STAY:
            return Object.assign({}, state, {[action.stay.id]: action.stay});
        case REMOVE_STAY:
            let nextState = Object.assign({}, state);
            delete nextState[action.stayId]
            return nextState;
        default:
            return state;
    }
}

export default staysReducer;