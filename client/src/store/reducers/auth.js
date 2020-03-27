import * as actionTypes from '../actions/actionTypes';

const initialState = {
  username: null,
  links: null
};

const authSuccess = (state, action) => {
  return {
    ...state,
    username: action.username
  };
};

const authLogout = state => {
  return {
    ...state,
    username: null
  };
};

const addLinks = (state, action) => {
  return {
    ...state,
    links: action.links
  };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.AUTH_SUCCESS:
      return authSuccess(state, action);
    case actionTypes.AUTH_LOGOUT:
      return authLogout(state);
    case actionTypes.ADD_LINKS:
      return addLinks(state, action);
    default:
      return state;
  }
};

export default reducer;
