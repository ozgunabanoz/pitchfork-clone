import * as actionTypes from './../actions/actionTypes';

const initialState = {
  lFeatures: null
};

const fetchFeatures = (state, action) => {
  return {
    ...state,
    lFeatures: action.lFeatures
  };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_LFEATURES:
      return fetchFeatures(state, action);
    default:
      return state;
  }
};

export default reducer;
