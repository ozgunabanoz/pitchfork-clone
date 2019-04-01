import 'materialize-css/dist/css/materialize.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import reduxThunk from 'redux-thunk';
import { BrowserRouter } from 'react-router-dom';

import App from './components/App';
import * as serviceWorker from './serviceWorker';
import authReducer from './store/reducers/auth';
import reviewReducer from './store/reducers/review';

const rootReducer = combineReducers({
    regist: authReducer,
    reviewStore: reviewReducer
});
const store = createStore(rootReducer, {}, applyMiddleware(reduxThunk));
const app = (
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
);

ReactDOM.render(app, document.getElementById('root'));

serviceWorker.unregister();
