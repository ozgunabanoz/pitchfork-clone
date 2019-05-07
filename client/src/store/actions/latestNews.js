import axios from 'axios';

import * as actionTypes from './actionTypes';

export const getLatestNews = () => {
    return async dispatch => {
        try {
            let resData = await axios.get('/api/latest_news');

            dispatch(fetchData(resData.data));
        } catch (e) {
            console.log(e);
        }
    };
};

export const fetchData = news => {
    return {
        type: actionTypes.FETCH_LNEWS,
        lNews: news
    };
};
