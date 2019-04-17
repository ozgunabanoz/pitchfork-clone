import axios from 'axios';

import * as actionTypes from './actionTypes';

export const postUser = registerForm => {
    return async dispatch => {
        try {
            await axios.post('/api/post_user', registerForm);

            let loginInfo = {
                username: registerForm.username,
                password: registerForm.password
            };

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

export const logout = () => {
    localStorage.removeItem('username');
    localStorage.removeItem('authExpDate');
    axios.delete('/api/logout').then(() => {});

    return {
        type: actionTypes.AUTH_LOGOUT
    };
};

export const checkAuthTimeOut = expSec => {
    return dispatch => {
        setTimeout(() => {
            dispatch(logout());
        }, expSec);
    };
};

export const authStart = userData => {
    return dispatch => {
        const expSec = 60 * 60 * 1000;
        let expDate = new Date(new Date().getTime() + expSec);
        let username = userData.data.username;

        localStorage.setItem('username', username);
        localStorage.setItem('authExpDate', expDate);
        dispatch(authSuccess(username));
        dispatch(checkAuthTimeOut(expSec));
    };
};

export const authSuccess = username => {
    return {
        type: actionTypes.AUTH_SUCCESS,
        username: username
    };
};

export const checkAuthState = () => {
    return dispatch => {
        const username = localStorage.getItem('username');

        if (!username) {
            dispatch(logout());
        } else {
            const expDate = new Date(localStorage.getItem('authExpDate'));

            if (expDate < new Date()) {
                dispatch(logout());
            } else {
                dispatch(authSuccess(username));
                dispatch(
                    checkAuthTimeOut(expDate.getTime() - new Date().getTime())
                );
            }
        }
    };
};

export const addLinks = links => {
    return {
        type: actionTypes.ADD_LINKS,
        links: links
    };
};
