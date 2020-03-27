import React, { Component } from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';

import './AuthForm.css';
import FIELDS from './fields';
import * as actions from './../../../store/actions/index';

class AuthForm extends Component {
  state = {
    login: {
      username: '',
      password: ''
    },
    register: {
      username: '',
      email: '',
      password: ''
    }
  };

  inputChangedHandler = (event, inputEntity) => {
    const updatedFormElement = {
      ...this.state[this.props.itemClass],
      [inputEntity]: event.target.value
    };

    this.setState({ [this.props.itemClass]: updatedFormElement });
  };

  onSubmitHandler = event => {
    event.preventDefault();
    this.props[this.props.authFunc](this.state[this.props.itemClass]);
  };

  renderFields() {
    return _.map(
      FIELDS[this.props.itemClass],
      ({ label, name, type }) => {
        return (
          <div key={name} className="row">
            <div className="input-field col s8">
              <input
                id={name}
                type={type}
                value={this.state[this.props.itemClass][name]}
                onChange={event =>
                  this.inputChangedHandler(event, name)
                }
              />
              <label className="active" for={name}>
                {label}
              </label>
            </div>
          </div>
        );
      }
    );
  }

  render() {
    return (
      <div className="firstdiv">
        <div className="row">
          <form
            className="col s9 offset-s3"
            onSubmit={this.onSubmitHandler}
            autoComplete="off"
          >
            {this.renderFields()}
            <button className="btn-flat" type="submit">
              Submit
            </button>
          </form>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onLogin: loginForm => dispatch(actions.login(loginForm)),
    onRegister: registerForm =>
      dispatch(actions.postUser(registerForm))
  };
};

export default connect(null, mapDispatchToProps)(AuthForm);
