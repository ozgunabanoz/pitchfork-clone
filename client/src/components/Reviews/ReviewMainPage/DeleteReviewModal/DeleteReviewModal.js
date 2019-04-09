import React, { Component } from 'react';
import M from 'materialize-css';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import './DeleteReviewModal.css';
import * as actions from './../../../../store/actions/index';

class DeleteReviewModal extends Component {
    state = {
        review: {},
        redirect: false
    };

    componentDidMount() {
        let elems = document.querySelectorAll('.modal');
        M.Modal.init(elems);
        this.setState({ review: this.props.clickedReviewProp });
        this.setState({ redirect: false });
    }

    onDeleteClick = event => {
        event.preventDefault();
        this.props.onDeleteRev(this.state.review);
        this.setState({ redirect: true });
    };

    render() {
        return (
            <div>
                <a className="btn-floating modal-trigger" href="#modal2">
                    <i className="small material-icons">clear</i>
                </a>

                <div id="modal2" className="modal">
                    <div className="modal-content">
                        <form onSubmit={this.onDeleteClick}>
                            <h4>
                                Delete the review of{' '}
                                {this.state.review.albumTitle} by{' '}
                                {this.state.review.albumArtist}
                            </h4>
                            <p>Are you sure?</p>
                            <button
                                href="#!"
                                className="modal-close btn-flat"
                                type="submit"
                            >
                                Agree
                            </button>
                        </form>
                    </div>
                </div>
                {this.state.redirect ? <Redirect to="/reviews" /> : null}
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onDeleteRev: review => dispatch(actions.deleteReview(review))
    };
};

export default connect(
    null,
    mapDispatchToProps
)(DeleteReviewModal);
