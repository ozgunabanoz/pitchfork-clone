import axios from 'axios';

import * as actionTypes from './actionTypes';

export const getLatestReviews = () => {
  return async dispatch => {
    try {
      let resData = await axios.get('/api/latest_reviews');

      dispatch(fetchData(resData.data));
    } catch (e) {
      console.log(e);
    }
  };
};

export const fetchData = reviews => {
  return {
    type: actionTypes.FETCH_LREVIEWS,
    lReviews: reviews
  };
};
