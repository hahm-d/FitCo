import AsyncStorage from '@react-native-community/async-storage';
import {FETCH_POSTS_REQUEST, ADD_POSTS, FETCH_COACHPOST_REQUEST, ADD_COACH_POSTS, START_CREATE_POST_REQUEST, ADD_POST, START_DELETE_POST_REQUEST, DELETE_POST, SELECT_POST, ERROR} from '../constants/actionTypes'

//fetch all posts
const api = 'http://localhost:3000'
export function fetchPosts(token) {
    return (dispatch) => {
      dispatch({ type: FETCH_POSTS_REQUEST })
      fetch(`${api}/posts`, {
          method: "GET",
          headers: {
                      Authorization: `Bearer ${token}`
                  }
              })
      .then(resp => resp.json())
      .then(posts => dispatch({ type: ADD_POSTS, posts }));
    };
}


//fetch that user's posts (coach)
export function fetchCoachPosts(id, token){
  return (dispatch) => {
      dispatch({ type: FETCH_COACHPOST_REQUEST })
      fetch(`${api}/api/v1/users/${id}/posts`, {
          method: "GET",
          headers: {
                      Authorization: `Bearer ${token}`
                  }
      })
      .then(resp => resp.json())
      .then(posts => dispatch({ type: ADD_COACH_POSTS, posts }))
  };
}



//create post
// title, content, url, views, likes, images, poster_username 
export function addPost(postObj, token){
  return dispatch => {
      dispatch({type: START_CREATE_POST_REQUEST})
      fetch(`${api}/posts`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
          },
          body: JSON.stringify({ post: postObj })
        })
        .then(resp => resp.json())
        .then(post => {
          dispatch({ type: ADD_POST, post})
      })
      .catch((err) => {
          dispatch({type: ERROR, err });
      })
  }
}

//delete post (FIX)
export function deletePost(postid){
  const userToken = AsyncStorage.getItem('userToken')
  return dispatch => {
      dispatch({type: START_DELETE_POST_REQUEST})
      fetch(`${api}/posts/${postid}`, {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${userToken}`
          }
        })
        .then(resp => resp.json())
        .then(post => {
          dispatch({ type: DELETE_POST, post})
      })
      .catch((err) => {
          dispatch({type: ERROR, err });
      })
  }
}

//select_post
export const selectPost = selectedpost => ({ type: SELECT_POST, selectedpost })

