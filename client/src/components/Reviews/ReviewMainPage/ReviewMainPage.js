import React, { Component } from 'react';
import { connect } from 'react-redux';
import M from 'materialize-css';

import ReviewEditModal from './ReviewEditModal/ReviewEditModal';
import DeleteReviewModal from './DeleteReviewModal/DeleteReviewModal';
import './ReviewMainPage.css';

class ReviewMainPage extends Component {
    componentDidMount() {
        let elems = document.querySelectorAll('.fixed-action-btn');
        M.FloatingActionButton.init(elems);
    }

    // continue styling later
    formatReview = () => {
        let review = this.props.clickedReview.review
            .split('\n')
            .map((item, key) => {
                return (
                    <span>
                        &nbsp;&nbsp;&nbsp;&nbsp;{item}
                        <br />
                    </span>
                );
            });

        return review;
    };

    render() {
        return (
            <div
                className="container"
                style={{ textAlign: 'justify', fontSize: 'small' }}
            >
                <div className="fixed-action-btn">
                    <a className="btn-floating btn-large red">
                        <i className="small material-icons">mode_edit</i>
                    </a>
                    <ul>
                        <li key="reviewEditModal">
                            <ReviewEditModal
                                clickedReviewProp={this.props.clickedReview}
                            />
                        </li>
                        <li key="reviewDelModal">
                            <DeleteReviewModal
                                clickedReviewProp={this.props.clickedReview}
                            />
                        </li>
                    </ul>
                </div>
                <h3>{this.props.clickedReview.albumTitle}</h3>
                <h3>{this.props.clickedReview.albumArtist}</h3>
                <h5>By: {this.props.clickedReview.writer}</h5>
                <h5>
                    <div>{this.formatReview()}</div>
                </h5>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        clickedReview: state.reviewStore.clickedReview
    };
};

export default connect(mapStateToProps)(ReviewMainPage);
