import axios from 'axios';

import * as actionTypes from './actionTypes';

export const getBNM = () => {
  return async dispatch => {
    try {
      let resData = await axios.get('/api/best_reviews');

      dispatch(fetchData(resData.data));
    } catch (e) {}
  };
};

export const fetchData = items => {
  return {
    type: actionTypes.FETCH_BNM,
    BNM: items
  };
};
