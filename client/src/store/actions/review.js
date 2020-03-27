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

export const postReviews = reviewSubmitForm => {
  return async dispatch => {
    try {
      await axios.post('/api/reviews', reviewSubmitForm);
      dispatch(getReviews());
    } catch (e) {
      console.log(e);
    }
  };
};

export const onClickReview = review => {
  return {
    type: actionTypes.ON_CLICK_REVIEW,
    clickedReview: review
  };
};

export const updateReview = review => {
  return async dispatch => {
    try {
      let returnedData = await axios.patch('/api/reviews', review);

      dispatch(onClickReview(returnedData.data));
    } catch (e) {
      console.log(e);
    }
  };
};

export const deleteReview = review => {
  return async dispatch => {
    try {
      await axios.delete('/api/reviews', { data: review });
      dispatch(getReviews());
    } catch (e) {
      console.log(e);
    }
  };
};
