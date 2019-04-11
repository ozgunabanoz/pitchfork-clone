import React, { Component } from 'react';
import M from 'materialize-css';
import { connect } from 'react-redux';

import * as actions from './../../../../store/actions/index';
import './EditFeaturesModal.css';

class EditFeaturesModal extends Component {
    state = {
        featureToEdit: {}
    };

    componentDidMount() {
        let elems = document.querySelectorAll('.modal');
        M.Modal.init(elems);
        this.setState({ featureToEdit: this.props.clickedFeatureProp });
    }

    onChangeHandler = (event, inputEntity) => {
        const updElement = {
            ...this.state.featureToEdit,
            [inputEntity]: event.target.value
        };

        this.setState({ featureToEdit: updElement });
    };

    onSubmitHandler = event => {
        event.preventDefault();
        this.props.onUpdateFeatures(this.state.featureToEdit);
    };

    render() {
        return (
            <div>
                <a className="btn-floating modal-trigger" href="#modal1">
                    <i className="small material-icons">create</i>
                </a>

                <div id="modal1" className="modal">
                    <div className="modal-content">
                        <form
                            autoComplete="off"
                            onSubmit={this.onSubmitHandler}
                        >
                            <input
                                placeholder="Title"
                                value={this.state.featureToEdit.title}
                                onChange={event =>
                                    this.onChangeHandler(event, 'title')
                                }
                            />
                            <input
                                placeholder="Headline"
                                value={this.state.featureToEdit.headline}
                                onChange={event =>
                                    this.onChangeHandler(event, 'headline')
                                }
                            />
                            <textarea
                                placeholder="Article"
                                value={this.state.featureToEdit.article}
                                onChange={event =>
                                    this.onChangeHandler(event, 'article')
                                }
                            />
                            <button
                                href="#!"
                                className="modal-close right btn-flat"
                                type="submit"
                            >
                                Edit
                            </button>
                        </form>
                    </div>
                    <div className="modal-footer" />
                </div>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onUpdateFeatures: feature => dispatch(actions.updateFeatures(feature))
    };
};

export default connect(
    null,
    mapDispatchToProps
)(EditFeaturesModal);
