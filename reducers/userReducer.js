import {FETCH_USERS_REQUEST, 
        ADD_USERS, 
        ADD_USER, 
        START_ADDING_USER_REQUEST, 
        SELECT_USER, 
        USER_ERROR} from '../constants/actionTypes'

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
              currentUser: action.addUser,
              isLoading: false
            };
          
          case SELECT_USER:
            return {
              ...state,
              selectedUser: action.selecteduser.user,
              isLoading: false
          }

          case USER_ERROR: 
              return { 
                ...state, 
                error: action.err
            }
          
          default: 
            return state;
          
    }
};

export default userReducer