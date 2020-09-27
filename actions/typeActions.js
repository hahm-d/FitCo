import {FETCH_TYPE_REQUEST, 
        ADD_TYPES, 
        START_CREATE_TYPE_REQUEST, 
        ADD_TYPE, 
        START_DELETE_TYPE_REQUEST, 
        DELETE_TYPE, 
        ADD_CATEGORY,
        TYPE_ERROR} from '../constants/actionTypes'

const api = 'http://localhost:3000'


const categories = [
    {
        "category": 1,
        "name": "HIT"
    },
    {
        "category": 2,
        "name": "Yoga"
    },
    {
        "category": 3,
        "name": "Conditioning"
    },
    {
        "category": 4,
        "name": "Shadow Boxing"
    },
    {
        "category": 5,
        "name": "Strength Training"
    },
    {
        "category": 6,
        "name": "Cardio"
    },
    {
        "category": 7,
        "name": "Cycle"
    },
    {
        "category": 8,
        "name": "Calisthenics"
    },
    {
        "category": 9,
        "name": "Dancing"
    },
    {
        "category": 99,
        "name": "All"
    }
]


//fetch Type
export function fetchTypes(token) {
  return (dispatch) => {
    dispatch({ type: FETCH_TYPE_REQUEST })
    fetch(`${api}/types`, {
        method: "GET",
        headers: {
                accepts: "application/json",
                "content-type": "application/json",
                 Authorization: `Bearer ${token}`
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


export const addCategory = () => ({type: ADD_CATEGORY, categories})


