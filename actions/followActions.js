import AsyncStorage from '@react-native-community/async-storage';
import {FETCH_USERS_REQUEST, ADD_USERS} from '../constants/actionTypes'

const api = 'http://localhost:3000/api/v1'
//fetch all users (eventually will be coaches only)
export function fetchUsers() {
    const userToken = AsyncStorage.getItem('userToken')
    return (dispatch) => {
        dispatch({ type: FETCH_USERS_REQUEST })
        fetch(`${api}/users`, {
            method: "GET",
            headers: {
                        Authorization: `Bearer ${userToken}`
                    }
        })
        .then(resp => resp.json())
        .then(users => dispatch({ type: ADD_USERS, users }));
    };
}



/* export function followingUsers(){

} */