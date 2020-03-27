import * as actionTypes from './../actions/actionTypes';

const initialState = {
  lNews: null
};

const fetchNews = (state, action) => {
  return {
    ...state,
    lNews: action.lNews
  };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_LNEWS:
      return fetchNews(state, action);
    default:
      return state;
  }
};

export default reducer;
