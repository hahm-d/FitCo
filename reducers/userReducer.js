import {FETCH_USERS_REQUEST, ADD_USERS, ADD_USER, START_ADDING_USER_REQUEST, LOGOUT_USER, ERROR} from '../constants/actionTypes'

const initialState = {
    currentUser: {},
    users: {},
    isLoading: false,
    error: null,
    selectedUser: null,
}

const userReducer = (state = initialState, action) => {
    console.log(action)
        switch (action.type) {
          case FETCH_USERS_REQUEST: {
            return {
              ...state,
              users: {...state.users},
              isLoading: true
            };
          }
          case ADD_USERS: {
            return {
              ...state,
              users: action.users,
              isLoading: false
            };
          }
          case START_ADDING_USER_REQUEST: {
            return {
              ...state,
              currentUser: {...state.user},
              isLoading: true
            };
          }
          case ADD_USER: {
            return {
              ...state,
              currentUser: action.user,
              isLoading: false
            };
          }
          case LOGOUT_USER: {
            return { 
              ...state, 
              currentUser: null,
              isLoading: false
          }
        }
          case ERROR: {
              return { 
                ...state, 
                error: action.error
            }
          }
          default: {
            return state;
          }
    }
};

export default userReducer