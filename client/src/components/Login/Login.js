import React, { Component } from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';

import FIELDS from './fields';
import * as actions from './../../store/actions/index';
import './Login.css';

class Login extends Component {
    state = {
        loginForm: {
            username: '',
            password: ''
        }
    };

    inputChangedHandler = (event, inputEntity) => {
        const updatedFormElement = {
            ...this.state.loginForm,
            [inputEntity]: event.target.value
        };

        this.setState({ loginForm: updatedFormElement });
    };

    onLoginSubmitHandler = event => {
        event.preventDefault();
        this.props.onLogin(this.state.loginForm);
    };

    renderFields() {
        return _.map(FIELDS, ({ label, name, type }) => {
            return (
                <div key={name} className="row">
                    <div className="input-field col s8">
                        <input
                            id={name}
                            type={type}
                            value={this.state.loginForm[name]}
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
        });
    }

    render() {
        return (
            <div className="firstdiv">
                <div className="row">
                    <form
                        className="col s9 offset-s3"
                        onSubmit={this.onLoginSubmitHandler}
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
        onLogin: loginForm => dispatch(actions.login(loginForm))
    };
};

export default connect(
    null,
    mapDispatchToProps
)(Login);
