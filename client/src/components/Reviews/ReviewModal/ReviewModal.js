import React, { Component } from 'react';
import M from 'materialize-css';
import { connect } from 'react-redux';

import ImageUploader from './../../ImageUploader';
import * as actions from '../../../store/actions/index';
import './ReviewModal.css';

class ReviewModal extends Component {
    state = {
        reviewSubmitForm: {
            albumArtist: '',
            albumTitle: '',
            review: '',
            genre: ''
        }
    };

    componentDidMount() {
        let elems = document.querySelectorAll('.modal');
        M.Modal.init(elems);
    }

    inputChangedHandler = (event, inputEntity) => {
        const updatedFormElement = {
            ...this.state.reviewSubmitForm,
            [inputEntity]: event.target.value
        };

        this.setState({ reviewSubmitForm: updatedFormElement });
    };

    onSubmitHandler = event => {
        event.preventDefault();
        this.props.onPostReviews(this.state.reviewSubmitForm);
        this.setState({
            reviewSubmitForm: {
                albumArtist: '',
                albumTitle: '',
                review: '',
                genre: ''
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
                                onSubmit={this.onSubmitHandler}
                                autoComplete="off"
                            >
                                <input
                                    placeholder="Artist"
                                    onChange={event =>
                                        this.inputChangedHandler(
                                            event,
                                            'albumArtist'
                                        )
                                    }
                                    value={
                                        this.state.reviewSubmitForm.albumArtist
                                    }
                                />
                                <input
                                    placeholder="Album Title"
                                    onChange={event =>
                                        this.inputChangedHandler(
                                            event,
                                            'albumTitle'
                                        )
                                    }
                                    value={
                                        this.state.reviewSubmitForm.albumTitle
                                    }
                                />
                                <textarea
                                    placeholder="Review"
                                    onChange={event =>
                                        this.inputChangedHandler(
                                            event,
                                            'review'
                                        )
                                    }
                                    value={this.state.reviewSubmitForm.review}
                                />
                                <input
                                    placeholder="Genre"
                                    onChange={event =>
                                        this.inputChangedHandler(event, 'genre')
                                    }
                                    value={this.state.reviewSubmitForm.genre}
                                />
                                {/* <ImageUploader /> */}
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
        onPostReviews: reviewSubmitForm =>
            dispatch(actions.postReviews(reviewSubmitForm))
    };
};

export default connect(
    null,
    mapDispatchToProps
)(ReviewModal);
