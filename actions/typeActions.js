import {FETCH_TYPE_REQUEST, 
        ADD_TYPES, 
        START_CREATE_TYPE_REQUEST, 
        ADD_TYPE, 
        START_DELETE_TYPE_REQUEST, 
        DELETE_TYPE, 
        TYPE_ERROR} from '../constants/actionTypes'

const api = 'http://localhost:3000'
//fetch Type
export function fetchTypes() {
  return (dispatch) => {
    dispatch({ type: FETCH_TYPE_REQUEST })
    fetch(`${api}/types`, {
        method: "GET",
        headers: {
                accepts: "application/json",
                "content-type": "application/json"
                }
            })
    .then(resp => resp.json())
    .then(types => dispatch({ type: ADD_TYPES, types }));
  };
}


//update     rails permits: user_id, category
export function addType(typeObj, token){
  return dispatch => {
      dispatch({type: START_CREATE_TYPE_REQUEST})
      fetch(`${api}/types`, {
          method: "POST",
          headers: {
            accepts: "application/json",
            "content-type": "application/json",
            Authorization: `Bearer ${token}`
          },
          body: JSON.stringify({ category: typeObj })
        })
        .then(resp => resp.json())
        .then(usertype => {
          dispatch({ type: ADD_TYPE, usertype})
      })
      .catch((err) => {
          dispatch({type: TYPE_ERROR, err });
      })
  }
}

//delete type
export function deleteType(typeId, token){
  return dispatch => {
      dispatch({type: START_DELETE_TYPE_REQUEST})
      fetch(`${api}/comments/${typeId}`, {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${token}`
          }
        })
        .then(resp => resp.json())
        .then(usertype => {
          dispatch({ type: DELETE_TYPE, usertype})
      })
      .catch((err) => {
          dispatch({type: TYPE_ERROR, err });
      })
  }
}