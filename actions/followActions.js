import {FETCH_USERS_REQUEST, 
        ADD_USERS, 
        SELECT_USER, 
        UNFOLLOW_USER, 
        FOLLOW_USER, 
        ADD_FOLLOWING, 
        FETCH_FOLLOWING_REQUEST, 
        ADD_FOLLOWERS, 
        FETCH_FOLLOWERS_REQUEST, 
        FOLLOW_ERROR} from '../constants/actionTypes'

const api = 'https://tall-sloth-16.loca.lt/api/v1'
const api2 = 'https://tall-sloth-16.loca.lt'

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

export function fetchFollowers(id, token){
  return (dispatch) => {
      dispatch({ type: FETCH_FOLLOWERS_REQUEST })
      fetch(`${api}/users/${id}/followers`, {
          method: "GET",
          headers: {
                     "content-type": "application/json",
                      Authorization: `Bearer ${token}`
                  }
      })
      .then(resp => resp.json())
      .then(followers => dispatch({ type: ADD_FOLLOWERS, followers }));
  };
}

//User following 

export function fetchFollowing(id, token){
  return (dispatch) => {
      dispatch({ type: FETCH_FOLLOWING_REQUEST })
      fetch(`${api}/users/${id}/following`, {
          method: "GET",
          headers: {            
                      "content-type": "application/json",
                      Authorization: `Bearer ${token}`
                  }
      })
      .then(resp => resp.json())
      .then(followings => dispatch({ type: ADD_FOLLOWING, followings }));
  };
}


// followObj = {user_id: ,coach_id }
export function followCoach(followObj, token){
  return dispatch => {
     // dispatch({type: START_FOLLOW_REQUEST})
      fetch(`${api2}/relationships`, {
          method: "POST",
          headers: {
                      accepts: "application/json",
                      "content-type": "application/json",
                      Authorization: `Bearer ${token}`
          },
          body: JSON.stringify({ user_id: followObj.user_id,
                                 coach_id: followObj.coach_id })
        })
        .then(resp => resp.json())
        .then(following => {
          if(!following.confirmation){
            dispatch({ type: FOLLOW_USER, following})
          }
      })
      .catch((err) => {
          dispatch({type: FOLLOW_ERROR, err });
      })
  }
}

// followObj = {user_id: ,coach_id }
export function unFollowCoach(followObj, token){
  return dispatch => {
     // dispatch({type: START_UNFOLLOW_REQUEST})
      fetch(`${api2}/relationships`, {
          method: "DELETE",
          headers: {
                      Authorization: `Bearer ${token}`
          },
          body: JSON.stringify({ user_id: followObj.user_id,
                                 coach_id: followObj.coach_id })
        })
        .then(resp => resp.json())
        .then(following => {
          if(!following.confirmation){
            dispatch({ type: UNFOLLOW_USER, following})
          }
      })
      .catch((err) => {
          dispatch({type: FOLLOW_ERROR, err });
      })
  }
}

