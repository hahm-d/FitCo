import AsyncStorage from '@react-native-community/async-storage';
import {FETCH_USERS_REQUEST, ADD_USERS, FETCH_COACHPOST_REQUEST, ADD_COACH_POSTS} from '../constants/actionTypes'

const api = 'http://localhost:3000/api/v1'
//fetch all coaches (not users)
export function fetchUsers() {
    const userToken = AsyncStorage.getItem('userToken')
    return (dispatch) => {
        dispatch({ type: FETCH_USERS_REQUEST })
        fetch(`${api}/users/coaches`, {
            method: "GET",
            headers: {
                        Authorization: `Bearer ${userToken}`
                    }
        })
        .then(resp => resp.json())
        .then(users => dispatch({ type: ADD_USERS, users }));
    };
}


//fetch that user's posts (coach)
export function fetchCoachPosts(id){
    const userToken = AsyncStorage.getItem('userToken')
    return (dispatch) => {
        dispatch({ type: FETCH_COACHPOST_REQUEST })
        fetch(`${api}/users/retrieve_coach_posts/${id}`, {
            method: "GET",
            headers: {
                        Authorization: `Bearer ${userToken}`
                    }
        })
        .then(resp => resp.json())
        .then(users => dispatch({ type: ADD_COACH_POSTS, users }));
    };
}
