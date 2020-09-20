import {UNFOLLOW_USER, START_UNFOLLOW_REQUEST, FOLLOW_USER, START_FOLLOW_REQUEST, ADD_FOLLOWING, FETCH_FOLLOWING_REQUEST, ADD_FOLLOWERS, FETCH_FOLLOWERS_REQUEST, ERROR} from '../constants/actionTypes'

const initialState = {
    followers: null,
    followings: [],
    isLoading: false
}

const followReducer = (state = initialState, action) => {

        switch (action.type) {
          case START_UNFOLLOW_REQUEST: 
            return {
              ...state,
              followings: {...state.users},
              isLoading: true
            };
          
          case UNFOLLOW_USER: 
            return {
              ...state,
              users: action.users,
              isLoading: false
            };
          
          case START_FOLLOW_REQUEST: 
            return {
              ...state,
              currentUser: {...state.user},
              isLoading: true
            };
          
          case FOLLOW_USER: 
            return {
              ...state,
              currentUser: action.user,
              isLoading: false
            };
          
          case FETCH_FOLLOWING_REQUEST:
            return {
              ...state,
              selectedUser: action.selecteduser
          }

          case ADD_FOLLOWING: 
            return { 
              ...state, 
              currentUser: null,
              isLoading: false
          }

          case FETCH_FOLLOWERS_REQUEST:
            return {
              ...state,
              selectedUser: action.selecteduser
          }

          case ADD_FOLLOWERS: 
            return { 
              ...state, 
              currentUser: null,
              isLoading: false
          }
          case ERROR: 
              return { 
                ...state, 
                error: action.error
            }
          
          default: 
            return state;
          
    }
};



export default followReducer