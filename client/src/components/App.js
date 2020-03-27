import React, { Component } from 'react';
import {
  BrowserRouter,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';
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
import NoPage from './NoPage';
import * as actions from './../store/actions/index';
import './App.css';

class App extends Component {
  state = {
    authLinks: ['/reviews', '/news', '/features', '/bestnewmusic'],
    nonAuthLinks: ['/register', '/login']
  };

  componentDidMount() {
    this.props.checkAuth();
  }

  render() {
    let routes = (
      <Switch>
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
        <Route path="/" exact component={MainPage} />
        <Route component={NoPage} />
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
          <Route component={NoPage} />
        </Switch>
      );
      this.props.addLinks(this.state.authLinks);
    } else {
      this.props.addLinks(this.state.nonAuthLinks);
    }

    return (
      <div className="App">
        <BrowserRouter>
          <Header />
          {routes}
        </BrowserRouter>
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
    checkAuth: () => dispatch(actions.checkAuthState()),
    addLinks: links => dispatch(actions.addLinks(links))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
