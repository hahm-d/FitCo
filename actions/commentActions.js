import {FETCH_COMMENT_REQUEST, 
        POST_COMMENTS, 
        START_CREATE_COMMENT_REQUEST, 
        ADD_COMMENT, 
        START_DELETE_COMMENT_REQUEST, 
        DELETE_COMMENT, 
        COMMENT_ERROR} from '../constants/actionTypes'

const api = 'http://localhost:3000'
//fetch individual post by id (with nested comments)
export function fetchPostComments(id, token) {
  return (dispatch) => {
    dispatch({ type: FETCH_COMMENT_REQUEST })
    fetch(`${api}/posts/${id}`, {
        method: "GET",
        headers: {
                    Authorization: `Bearer ${token}`
                }
            })
    .then(resp => resp.json())
    .then(post => dispatch({ type: POST_COMMENTS, post }));
  };
}


//create comment
// username, comment, commenter_name
export function addComment(commentObj, token){
  return dispatch => {
      dispatch({type: START_CREATE_COMMENT_REQUEST})
      fetch(`${api}/comments`, {
          method: "POST",
          headers: {
            accepts: "application/json",
            "content-type": "application/json",
            Authorization: `Bearer ${token}`
          },
          body: JSON.stringify({ comment: commentObj })
        })
        .then(resp => resp.json())
        .then(comment => {
          dispatch({ type: ADD_COMMENT, comment})
      })
      .catch((err) => {
          dispatch({type: COMMENT_ERROR, err });
      })
  }
}

//delete comment
export function deleteComment(commentid, token){

  return dispatch => {
      dispatch({type: START_DELETE_COMMENT_REQUEST})
      fetch(`${api}/comments/${commentid}`, {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${token}`
          }
        })
        .then(resp => resp.json())
        .then(comment => {
          dispatch({ type: DELETE_COMMENT, comment})
      })
      .catch((err) => {
          dispatch({type: COMMENT_ERROR, err });
      })
  }
}