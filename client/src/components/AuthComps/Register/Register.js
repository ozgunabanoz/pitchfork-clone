import React, { Component } from 'react';

import AuthForm from './../AuthForm/AuthForm';

class Register extends Component {
  render() {
    return <AuthForm itemClass="register" authFunc="onRegister" />;
  }
}

export default Register;
