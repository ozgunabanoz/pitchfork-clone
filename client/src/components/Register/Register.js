import React, { Component } from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';

import FIELDS from './fields';
import * as actions from './../../store/actions/index';
import './Register.css';

class Register extends Component {
    state = {
        registerForm: {
            username: '',
            email: '',
            password: ''
        }
    };

    inputChangedHandler = (event, inputEntity) => {
        const updatedFormElement = {
            ...this.state.registerForm,
            [inputEntity]: event.target.value
        };

        this.setState({ registerForm: updatedFormElement });
    };

    onRegisterSubmitHandler = event => {
        event.preventDefault();
        this.props.onRegister(this.state.registerForm);
    };

    renderFields() {
        return _.map(FIELDS, ({ label, name, type }) => {
            return (
                <div key={name} className="row">
                    <div className="input-field col s8">
                        <input
                            id={name}
                            type={type}
                            value={this.state.registerForm[name]}
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
                        onSubmit={this.onRegisterSubmitHandler}
                        autoComplete="off"
                    >
                        {this.renderFields()}
                        <button
                            className="btn-flat red lighten-2 white-text"
                            type="submit"
                        >
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
        onRegister: registerForm => dispatch(actions.postUser(registerForm))
    };
};

export default connect(
    null,
    mapDispatchToProps
)(Register);
