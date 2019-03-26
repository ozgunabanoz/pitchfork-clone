import 'materialize-css/dist/css/materialize.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import reduxThunk from 'redux-thunk';

import App from './components/App';
import * as serviceWorker from './serviceWorker';
import registerReducer from './store/reducers/register';

const rootReducer = combineReducers({
    regist: registerReducer
});
const store = createStore(rootReducer, {}, applyMiddleware(reduxThunk));
const app = (
    <Provider store={store}>
        <App />
    </Provider>
);

ReactDOM.render(app, document.getElementById('root'));

serviceWorker.unregister();
