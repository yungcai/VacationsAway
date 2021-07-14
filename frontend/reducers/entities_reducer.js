import { combineReducers } from 'redux';
import reservationsReducer from './reservations_reducer';
import staysReducer from './stays_reducer';
import usersReducer from './users_reducer';


const entitiesReducer = combineReducers({
    users: usersReducer,
    stays: staysReducer,
    reservations: reservationsReducer
});

export default entitiesReducer;