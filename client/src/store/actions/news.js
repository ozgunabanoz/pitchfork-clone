import axios from 'axios';

import * as actionTypes from './actionTypes';

export const getNews = () => {
    return async dispatch => {
        try {
            let resData = await axios.get('/api/news');
            dispatch(fetchNews(resData.data));
        } catch (e) {
            console.log(e);
        }
    };
};

export const postNews = news => {
    return async dispatch => {
        try {
            await axios.post('/api/news', news);
            dispatch(getNews());
        } catch (e) {
            console.log(e);
        }
    };
};

export const fetchNews = news => {
    return {
        type: actionTypes.FETCH_NEWS,
        news: news
    };
};
