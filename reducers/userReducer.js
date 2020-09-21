import {FETCH_USERS_REQUEST, ADD_USERS, ADD_USER, START_ADDING_USER_REQUEST, LOGOUT_USER, SELECT_USER, ERROR} from '../constants/actionTypes'

const initialState = {
    currentUser: null,
    users: [],
    isLoading: false,
    error: null,
    selectedUser: null,
}

const userReducer = (state = initialState, action) => {
    console.log(action)
        switch (action.type) {
          case FETCH_USERS_REQUEST: 
            return {
              ...state,
              isLoading: true,
              error: null
            };
          
          case ADD_USERS: 
            return {
              ...state,
              users: action.users,
              isLoading: false
            };
          
          case START_ADDING_USER_REQUEST: 
            return {
              ...state,
              isLoading: true,
              error: null
            };
          
          case ADD_USER: 
            return {
              ...state,
              currentUser: action.currentuser.user,
              isLoading: false
            };
          
          case SELECT_USER:
            return {
              ...state,
              selectedUser: action.selecteduser.user,
              isLoading: false
          }
          case LOGOUT_USER: 
            return { 
              ...state, 
              currentUser: null,
              isLoading: false
          }
        
          case ERROR: 
              return { 
                ...state, 
                error: action.err
            }
          
          default: 
            return state;
          
    }
};

export default userReducer