//import combine from redux
import { combineReducers } from 'redux';

// actionType for clearing Redux state
import { DESTROY_SESSION } from '../constants/actionTypes';

//import all the other reducer functions
import userReducer from './userReducer';
import followReducer from './followReducer';
import postReducer from './postReducer';
import commentReducer from './commentReducer';
import tokenReducer from './tokenReducer';
import typeReducer from './typeReducer';

const allReducer = combineReducers({
    users: userReducer, 
    posts: postReducer,
    comments: commentReducer,
    follows: followReducer,
    types: typeReducer,
    token: tokenReducer
})

const rootReducer = (state, action) => {
    //clear all data in redux to initial
    if(action.type === DESTROY_SESSION){
        state = undefined
    }
    return allReducer(state, action);
}

export default rootReducer