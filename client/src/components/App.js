import React, { Component } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import Header from './Header/Header';
import Register from './Register/Register';
import MainPage from './MainPage';
import Login from './Login/Login';
import Logout from './Logout/Logout';
import Reviews from './Reviews/Reviews';
import ReviewMainPage from './Reviews/ReviewMainPage/ReviewMainPage';
import * as actions from './../store/actions/index';
import './App.css';

class App extends Component {
    componentDidMount() {
        this.props.checkAuth();
    }

    render() {
        let routes = ( // figure out the refreshing issue
            <Switch>
                <Route path="/register" component={Register} />
                <Route path="/login" component={Login} />
                <Route path="/" exact component={MainPage} />
                <Redirect to="/" />
            </Switch>
        );

        if (this.props.userName) {
            routes = (
                <Switch>
                    <Route path="/reviews" exact component={Reviews} />
                    <Route path="/reviews/albums" component={ReviewMainPage} />
                    <Route path="/logout" component={Logout} />
                    <Route path="/" exact component={MainPage} />
                    <Redirect to="/" />
                </Switch>
            );
        }

        return (
            <div className="App">
                <Header />
                {routes}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        userName: state.regist.username !== null
    };
};

const mapDispatchToProps = dispatch => {
    return {
        checkAuth: () => dispatch(actions.checkAuthState())
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);
