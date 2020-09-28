import {FETCH_TYPE_REQUEST, 
        ADD_TYPES, 
        START_CREATE_TYPE_REQUEST, 
        ADD_TYPE, 
        START_DELETE_TYPE_REQUEST, 
        DELETE_TYPE, 
        ADD_CATEGORY,
        TYPE_ERROR} from '../constants/actionTypes'

const initialState = {
    types: null,
    category: null,
    userTypes: null,
    isLoading: true,
    error: null
}

const typeReducer = (state = initialState, action) => {
        switch (action.type) {
           case ADD_CATEGORY:
            return {
                ...state,
                category: action.categories,
                isLoading: false,
            }

          case FETCH_TYPE_REQUEST: 
            return {
              ...state,
              isLoading: true,
              error: null
            };

          case ADD_TYPES:
            return {
              ...state,
              types: action.types,
              isLoading: false,
          }

          case START_CREATE_TYPE_REQUEST: 
            return {
              ...state,
              isLoading: true,
              error: null
            };
          
          case ADD_TYPE: 
            return {
              ...state,
              types: [...state.types, action.type],
              isLoading: false
            };

          case START_DELETE_TYPE_REQUEST: 
            return {
              ...state,
              isLoading: true,
              error: null
            };
          
          case DELETE_TYPE: 
            return {
              ...state,
              types: state.types.filter(type => type !== action.type),
              isLoading: false
            };    

          case TYPE_ERROR: 
            return { 
              ...state, 
              error: action.err
          }

          default: 
            return state;
          
    }
};

export default typeReducer