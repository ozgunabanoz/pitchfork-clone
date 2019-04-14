import React, { Component } from 'react';
import M from 'materialize-css';
import { connect } from 'react-redux';

import * as actions from './../../../store/actions/index';
import './EditModal.css';

class EditModal extends Component {
    state = {
        news: {},
        feature: {}
    };

    componentDidMount() {
        let elems = document.querySelectorAll('.modal');
        M.Modal.init(elems);
        this.setState({ [this.props.itemClass]: this.props.clickedItem });
    }

    onChangeHandler = (event, inputEntity) => {
        const updElement = {
            ...this.state[this.props.itemClass],
            [inputEntity]: event.target.value
        };

        this.setState({ [this.props.itemClass]: updElement });
    };

    onSubmitHandler = event => {
        event.preventDefault();

        if (this.props.itemClass === 'news') {
            this.props.onUpdateNews(this.state[this.props.itemClass]);
        } else if (this.props.itemClass === 'feature') {
            this.props.onUpdateFeatures(this.state[this.props.itemClass]);
        }
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
                                value={this.state[this.props.itemClass].title}
                                onChange={event =>
                                    this.onChangeHandler(event, 'title')
                                }
                            />
                            <input
                                placeholder="Headline"
                                value={
                                    this.state[this.props.itemClass].headline
                                }
                                onChange={event =>
                                    this.onChangeHandler(event, 'headline')
                                }
                            />
                            <textarea
                                placeholder="Article"
                                value={this.state[this.props.itemClass].article}
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
        onUpdateNews: news => dispatch(actions.updateNews(news)),
        onUpdateFeatures: feature => dispatch(actions.updateFeatures(feature))
    };
};

export default connect(
    null,
    mapDispatchToProps
)(EditModal);
