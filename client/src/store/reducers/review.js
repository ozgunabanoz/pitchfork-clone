import * as actionTypes from './../actions/actionTypes';

const initialState = {
    reviews: null
};

const fetchUser = (state, action) => {
    return {
        ...state,
        reviews: action.reviews
    };
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_REVIEWS:
            return fetchUser(state, action);
        default:
            return state;
    }
};

export default reducer;
