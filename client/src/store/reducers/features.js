import * as actionTypes from './../actions/actionTypes';

const initialState = {
  features: null,
  clickedFeature: null
};

const fetchFeatures = (state, action) => {
  return {
    ...state,
    features: action.features
  };
};

const clickFeatures = (state, action) => {
  return {
    ...state,
    clickedFeature: action.clickedFeature
  };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_FEATURES:
      return fetchFeatures(state, action);
    case actionTypes.CLICK_FEATURES:
      return clickFeatures(state, action);
    default:
      return state;
  }
};

export default reducer;
