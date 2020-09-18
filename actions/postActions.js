import AsyncStorage from '@react-native-community/async-storage';
import {FETCH_POST_REQUEST,FETCH_POSTS_REQUEST, ADD_POSTS, ADD_POST} from '../constants/actionTypes'

const api = 'http://localhost:3000'
export function fetchPosts() {
    return (dispatch) => {
      const userToken = AsyncStorage.getItem('userToken')
      dispatch({ type: FETCH_POSTS_REQUEST })
      fetch(`${api}/posts`, {
          method: "GET",
          headers: {
                      Authorization: `Bearer ${userToken}`
                  }
              })
      .then(resp => resp.json())
      .then(posts => dispatch({ type: ADD_POSTS, posts }));
    };
}

export function fetchPost(postId) {
  return (dispatch) => {
    const userToken = AsyncStorage.getItem('userToken')
    dispatch({ type: FETCH_POST_REQUEST })
    fetch(`${api}/posts/${postId}`, {
        method: "GET",
        headers: {
                    Authorization: `Bearer ${userToken}`
                }
            })
    .then(resp => resp.json())
    .then(posts => dispatch({ type: ADD_POST, posts }));
  };
}