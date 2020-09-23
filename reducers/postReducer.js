import {FETCH_POSTS_REQUEST, ADD_POSTS, FETCH_COACHPOST_REQUEST, ADD_COACH_POSTS, START_CREATE_POST_REQUEST, ADD_POST, START_DELETE_POST_REQUEST, DELETE_POST, SELECT_POST, ERROR} from '../constants/actionTypes'

const initialState = {
    posts: [],
    coach_posts: [],
    isLoading: false,
    selectedPost: null,
    error: null
}

const postReducer = (state = initialState, action) => {
        switch (action.type) {
          case FETCH_POSTS_REQUEST: 
            return {
              ...state,
              isLoading: true,
              error: null
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
              isLoading: true,
              error: null
            };
          
          case ADD_COACH_POSTS: 
            return {
              ...state,
              coach_posts: action.posts,
              isLoading: false
            };

          case START_CREATE_POST_REQUEST: 
            return {
              ...state,
              isLoading: true,
              error: null
            };
          
          case ADD_POST: 
            return {
              ...state,
              coach_posts: [...state.coach_posts, action.post],
              isLoading: false
            };

          case START_DELETE_POST_REQUEST: 
            return {
              ...state,
              isLoading: true,
              error: null
            };
          
          case DELETE_POST: 
            return {
              ...state,
              coach_posts: state.coach_posts.filter(post => post !== action.post),
              isLoading: false
            };    

            case SELECT_POST:
              return {
                ...state,
                selectedPost: action.postObj
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

export default postReducer