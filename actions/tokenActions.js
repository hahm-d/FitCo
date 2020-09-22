import AsyncStorage from '@react-native-community/async-storage';
import {SAVE_APP_TOKEN, DELETE_APP_TOKEN} from '../constants/actionTypes'

export const saveToken = authToken => {
    AsyncStorage.setItem('userToken', authToken)
	return {
		type: SAVE_APP_TOKEN,
		authToken
	};
};

export const deleteToken = () => {
    AsyncStorage.removeItem('userToken')
	return {
		type: DELETE_APP_TOKEN
	};
};