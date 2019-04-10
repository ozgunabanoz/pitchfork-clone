import React, { Component } from 'react';
import M from 'materialize-css';
import { connect } from 'react-redux';

import * as actions from './../../../../store/actions/index';
import './EditNewsModal.css';

class EditNewsModal extends Component {
    state = {
        newsToEdit: {}
    };

    componentDidMount() {
        let elems = document.querySelectorAll('.modal');
        M.Modal.init(elems);
        this.setState({ newsToEdit: this.props.clickedNewsProp });
    }

    onChangeHandler = (event, inputEntity) => {
        const updElement = {
            ...this.state.newsToEdit,
            [inputEntity]: event.target.value
        };

        this.setState({ newsToEdit: updElement });
    };

    onSubmitHandler = event => {
        event.preventDefault();
        this.props.onUpdateNews(this.state.newsToEdit);
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
                                value={this.state.newsToEdit.title}
                                onChange={event =>
                                    this.onChangeHandler(event, 'title')
                                }
                            />
                            <input
                                placeholder="Headline"
                                value={this.state.newsToEdit.headline}
                                onChange={event =>
                                    this.onChangeHandler(event, 'headline')
                                }
                            />
                            <textarea
                                placeholder="Article"
                                value={this.state.newsToEdit.article}
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
        onUpdateNews: news => dispatch(actions.updateNews(news))
    };
};

export default connect(
    null,
    mapDispatchToProps
)(EditNewsModal);
