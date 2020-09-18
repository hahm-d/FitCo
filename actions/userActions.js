import AsyncStorage from '@react-native-community/async-storage';
import {START_ADDING_USER_REQUEST, 
        START_CREATE_USER_REQUEST, 
        ADD_USER, 
        ADD_NEW_USER, 
        LOGOUT_USER, 
        ERROR} from '../constants/actionTypes'

const api = 'http://localhost:3000'


// did mount? check the token
export function getUserToken(){ 
    const token = AsyncStorage.getItem('userToken')
    return (dispatch) => {
    if(token){
        dispatch({type: START_ADDING_USER_REQUEST })
        fetch(`${api}/api/v1/profile`, {
            method: "GET",
            headers: { Authorization: `Bearer ${token}`}
            })
            .then(resp => resp.json())
            .then(user => {
                dispatch({ type: ADD_USER, user});
            })
            .catch((err) => {
                dispatch({type: ERROR, err });
            })
        }
    }
}

//sign up 
export function saveUserToken(userObj){
    return dispatch => {
        dispatch({type: START_CREATE_USER_REQUEST})
        fetch(`${api}/api/v1/users`, {
            method: "POST",
            headers: {
              accepts: "application/json",
              "content-type": "application/json"
            },
            body: JSON.stringify({ user: userObj })
          })
          .then(resp => resp.json())
          .then(user => {
            dispatch({ type: ADD_NEW_USER, user})
            AsyncStorage.setItem("userToken", user.jwt)
        })
        .catch((err) => {
            dispatch({type: ERROR, err });
        })
    }
}

//login
export function loginUser(userObj){
    return dispatch => {
        dispatch({type: START_CREATE_USER_REQUEST})
        fetch(`${api}/api/v1/login`, {
            method: "POST",
            headers: {
              accepts: "application/json",
              "content-type": "application/json"
            },
            body: JSON.stringify({ user: userObj })
          })
          .then(resp => resp.json())
          .then(user => {
            dispatch({ type: ADD_NEW_USER, user})
            AsyncStorage.setItem("userToken", user.jwt)
        })
        .catch((err) => {
            dispatch({type: ERROR, err });
            AsyncStorage.removeItem("userToken")
        })
    }
}


//update user profile
//delete user account

//log out  
export function removeUserToken(){
    return dispatch => {
        dispatch({type: LOGOUT_USER })
        AsyncStorage.removeItem('userToken')
    }
}

