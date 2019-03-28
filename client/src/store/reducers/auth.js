import * as actionTypes from '../actions/actionTypes';

const initialState = {
    username: null,
    id: null
};

const authSuccess = (state, action) => {
    return {
        ...state,
        username: action.username,
        id: action.id
    };
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.AUTH_SUCCESS:
            return authSuccess(state, action);
        default:
            return state;
    }
};

export default reducer;
