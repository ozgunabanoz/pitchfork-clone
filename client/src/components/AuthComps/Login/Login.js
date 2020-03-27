import React, { Component } from 'react';

import AuthForm from './../AuthForm/AuthForm';

class Login extends Component {
  render() {
    return <AuthForm itemClass="login" authFunc="onLogin" />;
  }
}

export default Login;
