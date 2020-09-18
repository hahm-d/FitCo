import {FETCH_USERS_REQUEST, ADD_USERS} from '../constants/actionTypes'

export function fetchUsers() {
    return (dispatch) => {
      dispatch({ type: FETCH_USERS_REQUEST })
      fetch('http://api.open-notify.org/astros.json')
      .then(resp => resp.json())
      .then(users => dispatch({ type: ADD_USERS, users }));
    };
}
