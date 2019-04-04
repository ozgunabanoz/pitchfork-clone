import React, { Component } from 'react';
import M from 'materialize-css';
import { connect } from 'react-redux';

import * as actions from './../../store/actions/index';

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
                <div className="col s2 offset-s10">
                    <a
                        className="waves-effect waves-light btn modal-trigger"
                        href="#modal1"
                        style={{ backgroundColor: '#424242' }}
                    >
                        <i className="small material-icons">create</i>
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
                                    style={{ resize: 'none', height: '200px' }}
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
                                <button
                                    href="#!"
                                    className="modal-close right waves-effect waves-green btn"
                                    style={{
                                        backgroundColor: '#424242',
                                        marginTop: '10px'
                                    }}
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
