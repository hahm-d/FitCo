import {FETCH_COMMENT_REQUEST, POST_COMMENTS, START_CREATE_COMMENT_REQUEST, ADD_COMMENT, START_DELETE_COMMENT_REQUEST, DELETE_COMMENT, ERROR} from '../constants/actionTypes'

const initialState = {
    comments: [],
    isLoading: false,
    error: null
}

const commentReducer = (state = initialState, action) => {
        switch (action.type) {
          case FETCH_COMMENT_REQUEST: 
            return {
              ...state,
              isLoading: true,
              error: null
            };

          case POST_COMMENTS:
            return {
              ...state,
              comments: action.post.comments,
              isLoading: false,
          }

          case START_CREATE_COMMENT_REQUEST: 
            return {
              ...state,
              isLoading: true,
              error: null
            };
          
          case ADD_COMMENT: 
            return {
              ...state,
              comments: [...state.comments, action.comment],
              isLoading: false
            };

          case START_DELETE_COMMENT_REQUEST: 
            return {
              ...state,
              isLoading: true,
              error: null
            };
          
          case DELETE_COMMENT: 
            return {
              ...state,
              comment: state.comments.filter(comment => comment !== action.comment),
              isLoading: false
            };    

          case ERROR: 
            return { 
              ...state, 
              error: action.err
          }

          default: 
            return state;
          
    }
};

export default commentReducer