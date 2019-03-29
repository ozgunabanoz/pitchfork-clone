import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Header from './Header';
import Register from './Register/Register';
import MainPage from './MainPage';
import Login from './Login/Login';
import Logout from './Logout/Logout';

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <Header />
                    <Route exact path="/" component={MainPage} />
                    <Route exact path="/register" component={Register} />
                    <Route exact path="/login" component={Login} />
                    <Route exact path="/logout" component={Logout} />
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
