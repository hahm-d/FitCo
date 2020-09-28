import {UNFOLLOW_USER, 
        START_UNFOLLOW_REQUEST, 
        FOLLOW_USER, 
        START_FOLLOW_REQUEST, 
        ADD_FOLLOWING, 
        FETCH_FOLLOWING_REQUEST, 
        ADD_FOLLOWERS, 
        FETCH_FOLLOWERS_REQUEST, 
        FOLLOW_ERROR} from '../constants/actionTypes'

const initialState = {
    followers: null,
    followings: null,
    isLoading: true,
    error: null
}

const followReducer = (state = initialState, action) => {

        switch (action.type) {
          case START_UNFOLLOW_REQUEST: 
            return {
              ...state,
              isLoading: true,
              error: null
            };
          
          case UNFOLLOW_USER: 
            return {
              ...state,
              followings: state.followings.filter(user => user !== action.following),
              isLoading: false
            };
          
          case START_FOLLOW_REQUEST: 
            return {
              ...state,
              isLoading: true,
              error: null
            };
          
          case FOLLOW_USER: 
            return {
              ...state,
              followings: [...state.followings, action.following],
              isLoading: false
            };
          
          case FETCH_FOLLOWING_REQUEST:
            return {
              ...state,
              isLoading: true,
              error: null
          }

          case ADD_FOLLOWING: 
            return { 
              ...state, 
              followings: action.followings,
              isLoading: false
          }

          case FETCH_FOLLOWERS_REQUEST:
            return {
              ...state,
              isLoading: true,
              error: null
          }

          case ADD_FOLLOWERS: 
            return { 
              ...state, 
              followers: action.followers,
              isLoading: false
          }
          case FOLLOW_ERROR: 
              return { 
                ...state, 
                error: action.error
            }
          
          default: 
            return state;
          
    }
};



export default followReducer