import AsyncStorage from '@react-native-community/async-storage';
import {START_ADDING_USER_REQUEST, 
        START_CREATE_USER_REQUEST, 
        ADD_USER, 
        LOGOUT_USER, 
        SAVE_APP_TOKEN,
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
                const addUser = currentuser.user
                dispatch({ type: ADD_USER, addUser})
                //make sure to save token to state manually 
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
            const addUser = currentuser.user
            const authToken = currentuser.jwt
            dispatch({ type: ADD_USER, addUser})
            dispatch({ type: SAVE_APP_TOKEN, authToken})
            AsyncStorage.setItem('userToken', authToken)
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
            const addUser = currentuser.user
            const authToken = currentuser.jwt
            dispatch({ type: ADD_USER, addUser})
            dispatch({ type: SAVE_APP_TOKEN, authToken})
            AsyncStorage.setItem('userToken', authToken)
        })
        .catch((err) => {
            dispatch({type: ERROR, err });
        })
    }
}

//TO_DO: might need bearer token on header - check backend 
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
            const addUser = currentuser.user
            const authToken = currentuser.jwt
            dispatch({ type: ADD_USER, addUser})
            dispatch({ type: SAVE_APP_TOKEN, authToken})
            AsyncStorage.setItem('userToken', authToken)
        })
        .catch((err) => {
            dispatch({type: ERROR, err });
        })
    }
}


//delete user account

//log out  
export function signOutUser(){
    return dispatch => {
        dispatch({type: LOGOUT_USER })
    }
}

