import * as actionTypes from './../actions/actionTypes';

const initialState = {
  BNM: null
};

const fetchData = (state, action) => {
  return {
    ...state,
    BNM: action.BNM
  };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_BNM:
      return fetchData(state, action);
    default:
      return state;
  }
};

export default reducer;
