//import combine from redux
import { combineReducers } from 'redux';

//import all the other reducer functions
import userReducer from './userReducer';
import followReducer from './followReducer';
import postReducer from './postReducer';

const rootReducer = combineReducers({
    users: userReducer, 
    posts: postReducer,
    follows: followReducer,
})

export default rootReducer