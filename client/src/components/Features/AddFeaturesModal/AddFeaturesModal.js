import React, { Component } from 'react';
import M from 'materialize-css';
import { connect } from 'react-redux';

import * as actions from './../../../store/actions/index';
import './AddFeaturesModal.css';

class AddFeaturesModal extends Component {
    state = {
        featureSubmitForm: {
            title: '',
            headline: '',
            article: ''
        }
    };

    componentDidMount() {
        let elems = document.querySelectorAll('.modal');
        M.Modal.init(elems);
    }

    onChangeHandler = (event, input) => {
        const updatedElement = {
            ...this.state.featureSubmitForm,
            [input]: event.target.value
        };

        this.setState({ featureSubmitForm: updatedElement });
    };

    onSubmitHandler = event => {
        event.preventDefault();
        this.props.onPostFeatures(this.state.featureSubmitForm);
        this.setState({
            featureSubmitForm: {
                title: '',
                headline: '',
                article: ''
            }
        });
    };

    render() {
        return (
            <div className="row">
                <div className="col s1 offset-s11">
                    <a className="btn-floating modal-trigger" href="#modal1">
                        <i className="medium material-icons">create</i>
                    </a>
                    <div id="modal1" className="modal">
                        <div className="modal-content">
                            <form
                                autoComplete="off"
                                onSubmit={this.onSubmitHandler}
                            >
                                <input
                                    placeholder="Title"
                                    value={this.state.featureSubmitForm.title}
                                    onChange={event =>
                                        this.onChangeHandler(event, 'title')
                                    }
                                />
                                <input
                                    placeholder="Headline"
                                    value={
                                        this.state.featureSubmitForm.headline
                                    }
                                    onChange={event =>
                                        this.onChangeHandler(event, 'headline')
                                    }
                                />
                                <textarea
                                    placeholder="Article"
                                    value={this.state.featureSubmitForm.article}
                                    onChange={event =>
                                        this.onChangeHandler(event, 'article')
                                    }
                                />
                                <button
                                    href="#!"
                                    className="modal-close right btn-flat"
                                    type="submit"
                                >
                                    Send
                                </button>
                            </form>
                        </div>
                        <div className="modal-footer" />
                    </div>
                </div>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onPostFeatures: feature => dispatch(actions.postFeatures(feature))
    };
};

export default connect(
    null,
    mapDispatchToProps
)(AddFeaturesModal);
