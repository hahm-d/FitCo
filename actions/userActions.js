import AsyncStorage from '@react-native-community/async-storage';
import {START_ADDING_USER_REQUEST, 
        START_CREATE_USER_REQUEST, 
        ADD_USER, 
        SAVE_APP_TOKEN,
        USER_ERROR,
        DESTROY_SESSION
    } from '../constants/actionTypes'

const api = 'https://neat-owl-90.loca.lt'


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
                const addUser = currentuser.user
                dispatch({ type: ADD_USER, addUser})
            })
            .catch(err => {
                dispatch({type: USER_ERROR, err });
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
            const addUser = currentuser.user
            const authToken = currentuser.jwt
            dispatch({ type: ADD_USER, addUser})
            dispatch({ type: SAVE_APP_TOKEN, authToken})
            AsyncStorage.setItem('userToken', authToken)
        })
        .catch((err) => {
            dispatch({type: USER_ERROR, err });
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
            const addUser = currentuser.user
            const authToken = currentuser.jwt
            dispatch({ type: ADD_USER, addUser})
            dispatch({ type: SAVE_APP_TOKEN, authToken})
            AsyncStorage.setItem('userToken', authToken)
        })
        .catch((err) => {
            dispatch({type: USER_ERROR, err });
        })
    }
}

//update user profile 
export function updateUser(userObj, token){
    return dispatch => {
        dispatch({type: START_ADDING_USER_REQUEST})
        fetch(`${api}/api/v1/users/${userObj.id}`, {
            method: "PATCH",
            headers: {
              accepts: "application/json",
              "content-type": "application/json",
              Authorization: `Bearer ${token}`
            },
            body: JSON.stringify(userObj)
          })
          .then(resp => resp.json())
          .then(currentuser => {
            const addUser = currentuser.user
            const authToken = currentuser.jwt
            dispatch({ type: ADD_USER, addUser})
            dispatch({ type: SAVE_APP_TOKEN, authToken})
            AsyncStorage.setItem('userToken', authToken)
        })
        .catch((err) => {
            dispatch({type: USER_ERROR, err });
        })
    }
}


//delete user account

//log out  
export function signOutUser(){
    return dispatch => {
        dispatch({type: DESTROY_SESSION })
    }
}

