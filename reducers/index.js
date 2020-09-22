//import combine from redux
import { combineReducers } from 'redux';

//import all the other reducer functions
import userReducer from './userReducer';
import followReducer from './followReducer';
import postReducer from './postReducer';
import commentReducer from './commentReducer';
import tokenReducer from './tokenReducer';

const rootReducer = combineReducers({
    users: userReducer, 
    posts: postReducer,
    comments: commentReducer,
    follows: followReducer,
    token: tokenReducer
})

export default rootReducer