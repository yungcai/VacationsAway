import { RECEIVE_STAY, RECEIVE_STAYS, REMOVE_STAY } from "../actions/stay_actions";


const staysReducer = (state={}, action) => {

    Object.freeze(state);
    let nextState = Object.assign({}, state);
    switch(action.type){
        case RECEIVE_STAYS:
            return action.stays
        case RECEIVE_STAY:
            nextState[action.stay.id] = action.stay;
            return nextState;
        case REMOVE_STAY:
            delete nextState[action.stayId]
            return nextState;
        default:
            return state;
    }
}

export default staysReducer;