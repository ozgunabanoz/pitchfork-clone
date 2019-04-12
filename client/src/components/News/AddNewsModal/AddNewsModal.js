import React, { Component } from 'react';
import M from 'materialize-css';
import { connect } from 'react-redux';

import * as actions from './../../../store/actions/index';
import './AddNewsModal.css';

class AddNewsModal extends Component {
    state = {
        newsSubmitForm: {
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
            ...this.state.newsSubmitForm,
            [input]: event.target.value
        };

        this.setState({ newsSubmitForm: updatedElement });
    };

    onSubmitHandler = event => {
        event.preventDefault();
        this.props.onPostNews(this.state.newsSubmitForm);
        this.setState({
            newsSubmitForm: {
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
                                    value={this.state.newsSubmitForm.title}
                                    onChange={event =>
                                        this.onChangeHandler(event, 'title')
                                    }
                                />
                                <input
                                    placeholder="Headline"
                                    value={this.state.newsSubmitForm.headline}
                                    onChange={event =>
                                        this.onChangeHandler(event, 'headline')
                                    }
                                />
                                <textarea
                                    placeholder="Article"
                                    value={this.state.newsSubmitForm.article}
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
        onPostNews: news => dispatch(actions.postNews(news))
    };
};

export default connect(
    null,
    mapDispatchToProps
)(AddNewsModal);
