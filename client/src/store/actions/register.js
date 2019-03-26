import axios from 'axios';

import * as actionTypes from './actionTypes';

export const postUser = registerForm => {
    return async dispatch => {
        const res = await axios.post('/post_user', registerForm);
        console.log(res);
    };
};
