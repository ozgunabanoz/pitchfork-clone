import * as actionTypes from './../actions/actionTypes';

const initialState = {
    news: null
};

const fetchNews = (state, action) => {
    return {
        ...state,
        news: action.news
    };
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_NEWS:
            return fetchNews(state, action);
        default:
            return state;
    }
};

export default reducer;
