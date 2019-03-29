import * as actionTypes from '../actions/actionTypes';

const initialState = {
    username: null
};

const authSuccess = (state, action) => {
    return {
        ...state,
        username: action.username
    };
};

const authLogout = state => {
    return {
        ...state,
        username: null
    };
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.AUTH_SUCCESS:
            return authSuccess(state, action);
        case actionTypes.AUTH_LOGOUT:
            return authLogout(state);
        default:
            return state;
    }
};

export default reducer;
