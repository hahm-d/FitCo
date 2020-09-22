import {SAVE_APP_TOKEN, DELETE_APP_TOKEN} from '../constants/actionTypes'

let initialState = {
    authToken: false
}

const tokenReducer = (state = initialState, action) => {

        switch (action.type) {
          case SAVE_APP_TOKEN: 
            return {
              ...state,
              authToken: action.authToken
            };
                 
            case DELETE_APP_TOKEN: 
            return { 
              ...state, 
              authToken: false
          }
        
        default: 
          return state;
        
  }
};

export default tokenReducer