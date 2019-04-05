import React, { Component } from 'react';
import M from 'materialize-css';
import { connect } from 'react-redux';

import * as actions from '../../../../store/actions/index';
import './ReviewEditModal.css';

class ReviewEditModal extends Component {
    state = {
        reviewToEdit: {}
    };

    componentDidMount() {
        let elems = document.querySelectorAll('.modal');
        M.Modal.init(elems);
        this.setState({ reviewToEdit: this.props.clickedReviewProp });
    }

    onChangeHandler = (event, inputEntity) => {
        const updElement = {
            ...this.state.reviewToEdit,
            [inputEntity]: event.target.value
        };

        this.setState({ reviewToEdit: updElement });
    };

    onSubmitHandler = event => {
        event.preventDefault();
        this.props.onUpdateReview(this.state.reviewToEdit);
    };

    render() {
        return (
            <div className="row">
                <div className="col s2 offset-s12">
                    <a
                        className="waves-effect waves-light btn modal-trigger"
                        href="#modal1"
                    >
                        <i className="small material-icons">create</i>
                    </a>

                    <div id="modal1" className="modal">
                        <div className="modal-content">
                            <form
                                autoComplete="off"
                                onSubmit={this.onSubmitHandler}
                            >
                                <input
                                    placeholder="Artist"
                                    value={this.state.reviewToEdit.albumArtist}
                                    onChange={event =>
                                        this.onChangeHandler(
                                            event,
                                            'albumArtist'
                                        )
                                    }
                                />
                                <input
                                    placeholder="Album Title"
                                    value={this.state.reviewToEdit.albumTitle}
                                    onChange={event =>
                                        this.onChangeHandler(
                                            event,
                                            'albumTitle'
                                        )
                                    }
                                />
                                <textarea
                                    placeholder="Review"
                                    value={this.state.reviewToEdit.review}
                                    onChange={event =>
                                        this.onChangeHandler(event, 'review')
                                    }
                                />
                                <input
                                    placeholder="Genre"
                                    value={this.state.reviewToEdit.genre}
                                    onChange={event =>
                                        this.onChangeHandler(event, 'genre')
                                    }
                                />
                                <button
                                    href="#!"
                                    className="modal-close right waves-effect waves-green btn"
                                    type="submit"
                                >
                                    Edit
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
        onUpdateReview: review => dispatch(actions.updateReview(review))
    };
};

export default connect(
    null,
    mapDispatchToProps
)(ReviewEditModal);
