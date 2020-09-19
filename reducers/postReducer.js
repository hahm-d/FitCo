import {FETCH_POSTS_REQUEST, ADD_POSTS, FETCH_COACHPOST_REQUEST, ADD_COACH_POSTS} from '../constants/actionTypes'

const initialState = {
    posts: [],
    coach_posts: [],
    comments: [],
    isLoading: false,
}

const userReducer = (state = initialState, action) => {
        switch (action.type) {
          case FETCH_POSTS_REQUEST: 
            return {
              ...state,
              posts: {...state.posts},
              isLoading: true
            };
          
          case ADD_POSTS: 
            return {
              ...state,
              posts: action.posts,
              isLoading: false
            };
          
          case FETCH_COACHPOST_REQUEST: 
            return {
              ...state,
              coach_posts: {...state.post},
              isLoading: true
            };
          
          case ADD_COACH_POSTS: 
            return {
              ...state,
              coach_posts: action.post,
              isLoading: false
            };
          
          default: 
            return state;
          
    }
};

export default userReducer