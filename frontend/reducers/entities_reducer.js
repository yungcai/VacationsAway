import { combineReducers } from 'redux';
import staysReducer from './stays_reducer';
import usersReducer from './users_reducer';


const entitiesReducer = combineReducers({
    users: usersReducer,
    stays: staysReducer
})

export default entitiesReducer;