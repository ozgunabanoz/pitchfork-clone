import axios from 'axios';

import * as actionTypes from './actionTypes';

export const getReviews = () => {
    return async dispatch => {
        try {
            let resData = await axios.get('/api/reviews');

            dispatch(fetchReviews(resData.data));
        } catch (e) {
            console.log(e);
        }
    };
};

export const fetchReviews = reviewsData => {
    return {
        type: actionTypes.FETCH_REVIEWS,
        reviews: reviewsData
    };
};
