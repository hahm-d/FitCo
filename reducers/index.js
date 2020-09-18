//import combine from redux
import { combineReducers } from 'redux';
//import all the other reducer functions
import userReducer from './userReducer';
//import tokenReducer from './tokenReducer';

const rootReducer = combineReducers({
    users: userReducer, 
})

export default rootReducer