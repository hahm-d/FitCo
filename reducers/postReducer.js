import {FETCH_POSTS_REQUEST, ADD_POSTS, FETCH_POST_REQUEST, ADD_POST} from '../constants/actionTypes'

const initialState = {
    posts: {},
    post: {},
    comments: {},
    isLoading: false,
}

const userReducer = (state = initialState, action) => {
        switch (action.type) {
          case FETCH_POSTS_REQUEST: {
            return {
              ...state,
              posts: {...state.posts},
              isLoading: true
            };
          }
          case ADD_POSTS: {
            return {
              ...state,
              posts: action.posts,
              isLoading: false
            };
          }
          case FETCH_POST_REQUEST: {
            return {
              ...state,
              post: {...state.post},
              isLoading: true
            };
          }
          case ADD_POST: {
            return {
              ...state,
              post: action.post,
              isLoading: false
            };
          }
          default: {
            return state;
          }
    }
};

export default userReducer