import React, { Component } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import Header from './Header';
import Register from './Register/Register';
import MainPage from './MainPage';
import Login from './Login/Login';
import Logout from './Logout/Logout';
import Reviews from './Reviews/Reviews';
import ReviewMainPage from './Reviews/ReviewMainPage';
import * as actions from './../store/actions/index';

class App extends Component {
    componentDidMount() {
        this.props.checkAuth();
    }

    render() {
        let routes = (
            <Switch>
                <Route exact path="/" component={MainPage} />
                <Route path="/register" component={Register} />
                <Route path="/login" component={Login} />
                <Redirect to="/" />
            </Switch>
        );

        if (this.props.userName) {
            routes = (
                <Switch>
                    <Route exact path="/" component={MainPage} />
                    <Route path="/logout" component={Logout} />
                    <Route exact path="/reviews" component={Reviews} />
                    <Route path="/reviews/albums" component={ReviewMainPage} />
                    <Redirect to="/" />
                </Switch>
            );
        }

        return (
            <div>
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
