import * as actionTypes from './../actions/actionTypes';

const initialState = {
  news: null,
  clickedNews: null
};

const fetchNews = (state, action) => {
  return {
    ...state,
    news: action.news
  };
};

const clickNews = (state, action) => {
  return {
    ...state,
    clickedNews: action.clickedNews
  };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_NEWS:
      return fetchNews(state, action);
    case actionTypes.CLICK_NEWS:
      return clickNews(state, action);
    default:
      return state;
  }
};

export default reducer;
