import * as actionTypes from './../actions/actionTypes';

const initialState = {
    reviews: null,
    clickedReview: null
};

const fetchUser = (state, action) => {
    return {
        ...state,
        reviews: action.reviews
    };
};

const onClickReview = (state, action) => {
    return {
        ...state,
        clickedReview: action.clickedReview
    };
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_REVIEWS:
            return fetchUser(state, action);
        case actionTypes.ON_CLICK_REVIEW:
            return onClickReview(state, action);
        default:
            return state;
    }
};

export default reducer;
