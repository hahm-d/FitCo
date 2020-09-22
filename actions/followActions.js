import {FETCH_USERS_REQUEST, ADD_USERS, SELECT_USER, UNFOLLOW_USER, START_UNFOLLOW_REQUEST, FOLLOW_USER, START_FOLLOW_REQUEST, ADD_FOLLOWING, FETCH_FOLLOWING_REQUEST, ADD_FOLLOWERS, FETCH_FOLLOWERS_REQUEST} from '../constants/actionTypes'

const api = 'http://localhost:3000/api/v1'
//fetch all coaches (not users)
export function fetchUsers(token) {
    return (dispatch) => {
        dispatch({ type: FETCH_USERS_REQUEST })
        fetch(`${api}/users/coaches`, {
            method: "GET",
            headers: {
                        Authorization: `Bearer ${token}`
                    }
        })
        .then(resp => resp.json())
        .then(users => dispatch({ type: ADD_USERS, users }));
    };
}


//change select_user
export const selectCoach = selecteduser => ({ type: SELECT_USER, selecteduser })



//User's followers
export function fetchFollowers(id){
//  const userToken = AsyncStorage.getItem('userToken')
  return (dispatch) => {
      dispatch({ type: FETCH_FOLLOWERS_REQUEST })
      fetch(`${api}/users/${id}/followers`, {
          method: "GET",
          headers: {
                      Authorization: `Bearer ${userToken}`
                  }
      })
      .then(resp => resp.json())
      .then(followers => dispatch({ type: ADD_FOLLOWERS, followers }));
  };
}

//User following 
export function fetchFollowings(id){
 // const userToken = AsyncStorage.getItem('userToken')
  return (dispatch) => {
      dispatch({ type: FETCH_FOLLOWING_REQUEST })
      fetch(`${api}/users/${id}/following`, {
          method: "GET",
          headers: {
                      Authorization: `Bearer ${userToken}`
                  }
      })
      .then(resp => resp.json())
      .then(followings => dispatch({ type: ADD_FOLLOWING, followings }));
  };
}


// followObj = {follower_id: ,followed_id }
export function followCoach(followObj){
//  const userToken = AsyncStorage.getItem('userToken')
  return dispatch => {
      dispatch({type: START_FOLLOW_REQUEST})
      fetch(`${api}/relationship`, {
          method: "POST",
          headers: {
            accepts: "application/json",
            "content-type": "application/json",
            Authorization: `Bearer ${userToken}`
          },
          body: JSON.stringify({ relationship: followObj })
        })
        .then(resp => resp.json())
        .then(following => {
          dispatch({ type: FOLLOW_USER, following})
      })
      .catch((err) => {
          dispatch({type: ERROR, err });
      })
  }
}

//unfollow coach (need to track relationship id's in state )
export function unFollowCoach(relationshipid){
 // const userToken = AsyncStorage.getItem('userToken')
  return dispatch => {
      dispatch({type: START_UNFOLLOW_REQUEST})
      fetch(`${api}/relationship/${relationshipid}`, {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${userToken}`
          }
        })
        .then(resp => resp.json())
        .then(following => {
          dispatch({ type: UNFOLLOW_USER, following})
      })
      .catch((err) => {
          dispatch({type: ERROR, err });
      })
  }
}

