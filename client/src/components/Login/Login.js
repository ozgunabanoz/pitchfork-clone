import React, { Component } from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';

import FIELDS from './fields';
import * as actions from './../../store/actions/index';

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

    onLoginSubmitHandler = () => {
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
                            onChange={event => this.inputChangedHandler(event, name)}
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
            <div style={{ marginTop: '20px' }}>
                <div className="row">
                    <form className="col s9 offset-s3">{this.renderFields()}</form>
                </div>
                <div className="center-align">
                    <button
                        className="btn-flat red lighten-2 white-text"
                        style={{ marginLeft: '10px' }}
                        type="submit"
                        onClick={this.onLoginSubmitHandler}
                    >
                        Submit
                    </button>
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
