import React, { Component } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import Header from './MainComps/Header/Header';
import Register from './AuthComps/Register/Register';
import MainPage from './MainPage';
import Login from './AuthComps/Login/Login';
import Logout from './AuthComps/Logout/Logout';
import Reviews from './MainComps/Reviews/Reviews';
import ReviewMainPage from './MainComps/Reviews/ReviewMainPage/ReviewMainPage';
import News from './MainComps/News/News';
import NewsLayout from './MainComps/News/NewsLayout/NewsLayout';
import Features from './MainComps/Features/Features';
import FeaturesLayout from './MainComps/Features/FeaturesLayout/FeaturesLayout';
import BestNewMusic from './MainComps/BestNewMusic/BestNewMusic';
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
                    <Route path="/news" exact component={News} />
                    <Route path="/news/item/" component={NewsLayout} />
                    <Route path="/features" exact component={Features} />
                    <Route path="/features/item/" component={FeaturesLayout} />
                    <Route
                        path="/bestnewmusic"
                        exact
                        component={BestNewMusic}
                    />
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
