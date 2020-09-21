import AsyncStorage from '@react-native-community/async-storage';
import {START_CREATE_COMMENT_REQUEST, ADD_COMMENT, START_DELETE_COMMENT_REQUEST, DELETE_COMMENT, ERROR} from '../constants/actionTypes'

//create comment
// username, comment, commenter_name
export function addComment(commentObj){
  const userToken = AsyncStorage.getItem('userToken')
  return dispatch => {
      dispatch({type: START_CREATE_COMMENT_REQUEST})
      fetch(`${api}/comments`, {
          method: "POST",
          headers: {
            accepts: "application/json",
            "content-type": "application/json",
            Authorization: `Bearer ${userToken}`
          },
          body: JSON.stringify({ comment: commentObj })
        })
        .then(resp => resp.json())
        .then(comment => {
          dispatch({ type: ADD_COMMENT, comment})
      })
      .catch((err) => {
          dispatch({type: ERROR, err });
      })
  }
}

//delete comment
export function deleteComment(commentid){
  const userToken = AsyncStorage.getItem('userToken')
  return dispatch => {
      dispatch({type: START_DELETE_COMMENT_REQUEST})
      fetch(`${api}/comments/${commentid}`, {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${userToken}`
          }
        })
        .then(resp => resp.json())
        .then(comment => {
          dispatch({ type: DELETE_COMMENT, comment})
      })
      .catch((err) => {
          dispatch({type: ERROR, err });
      })
  }
}