import axios from 'axios';

import * as actionTypes from './actionTypes';

export const postUser = registerForm => {
    return async dispatch => {
        try {
            await axios.post('/api/post_user', registerForm);
            let loginInfo = { username: registerForm.username, password: registerForm.password };
            dispatch(login(loginInfo));
        } catch (e) {
            console.log(e);
        }
    };
};

export const login = loginInfo => {
    return async dispatch => {
        try {
            let userData = await axios.post('/api/login', loginInfo);
            dispatch(authStart(userData));
        } catch (e) {
            console.log(e);
        }
    };
};

export const authStart = userData => {
    return async dispatch => {
        localStorage.setItem('username', userData.data.username);
        localStorage.setItem('_id', userData.data._id);
        dispatch(authSuccess(userData));
    };
};

export const authSuccess = userData => {
    return {
        type: actionTypes.AUTH_SUCCESS,
        username: userData.data.username,
        id: userData.data._id
    };
};
