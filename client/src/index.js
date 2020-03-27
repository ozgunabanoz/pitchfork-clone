import 'materialize-css/dist/css/materialize.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import reduxThunk from 'redux-thunk';

import App from './components/App';
import authReducer from './store/reducers/auth';
import reviewReducer from './store/reducers/review';
import newsReducer from './store/reducers/news';
import featuresReducer from './store/reducers/features';
import BNMReducer from './store/reducers/bestNewMusic';
import lNewsReducer from './store/reducers/latestNews';
import lFeaturesReducer from './store/reducers/latestFeatures';
import lReviewsReducer from './store/reducers/latestReviews';

const rootReducer = combineReducers({
  regist: authReducer,
  reviewStore: reviewReducer,
  newsStore: newsReducer,
  featuresStore: featuresReducer,
  BNMStore: BNMReducer,
  lNewsStore: lNewsReducer,
  lReviewsStore: lReviewsReducer,
  lFeaturesStore: lFeaturesReducer
});
const store = createStore(
  rootReducer,
  {},
  applyMiddleware(reduxThunk)
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector('#root')
);
