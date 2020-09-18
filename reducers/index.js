//import combine from redux
import { combineReducers } from 'redux';

//import all the other reducer functions
import userReducer from './userReducer';
import postReducer from './postReducer';

const rootReducer = combineReducers({
    users: userReducer, 
    posts: postReducer,
})

export default rootReducer