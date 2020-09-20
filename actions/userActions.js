import AsyncStorage from '@react-native-community/async-storage';
import {START_ADDING_USER_REQUEST, 
        START_CREATE_USER_REQUEST, 
        ADD_USER, 
        ADD_NEW_USER, 
        LOGOUT_USER, 
        ERROR
    } from '../constants/actionTypes'

const api = 'http://localhost:3000'


export function validateUser(token){ 
   return (dispatch) => {
        dispatch({type: START_ADDING_USER_REQUEST })
        fetch(`${api}/api/v1/profile`, {
            method: "GET",
            headers: { 
                Accept: 'application/json',
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`}
            })
            .then(resp => resp.json())
            .then(currentuser => {
                dispatch({ type: ADD_USER, currentuser});
            })
            .catch(err => {
                console.log(err)
            })
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
          .then(currentuser => {
            dispatch({ type: ADD_NEW_USER, currentuser})
            AsyncStorage.setItem("userToken", currentuser.jwt)
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
          .then(currentuser => {
            dispatch({ type: ADD_NEW_USER, currentuser})
            AsyncStorage.setItem("userToken", currentuser.jwt)
        })
        .catch((err) => {
            dispatch({type: ERROR, err });
            AsyncStorage.removeItem("userToken")
        })
    }
}


//update user profile
export function updateUser(userObj){
    return dispatch => {
        dispatch({type: START_ADDING_USER_REQUEST})
        fetch(`${api}/api/v1/users/${userObj.id}`, {
            method: "PATCH",
            headers: {
              accepts: "application/json",
              "content-type": "application/json"
            },
            body: JSON.stringify(userObj)
          })
          .then(resp => resp.json())
          .then(currentuser => {
            dispatch({ type: ADD_USER, currentuser})
            AsyncStorage.setItem("userToken", currentuser.jwt)
        })
        .catch((err) => {
            dispatch({type: ERROR, err });
        })
    }
}


//delete user account

//log out  
export function removeUserToken(){
    return dispatch => {
        dispatch({type: LOGOUT_USER })
        AsyncStorage.removeItem('userToken')
    }
}

