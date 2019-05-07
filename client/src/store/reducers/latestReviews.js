import * as actionTypes from './../actions/actionTypes';

const initialState = {
    lReviews: null
};

const fetchReviews = (state, action) => {
    return {
        ...state,
        lReviews: action.lReviews
    };
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_LREVIEWS:
            return fetchReviews(state, action);
        default:
            return state;
    }
};

export default reducer;
