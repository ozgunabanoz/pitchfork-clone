import React, { Component } from 'react';
import { connect } from 'react-redux';

import ReviewEditModal from './ReviewEditModal/ReviewEditModal';
import DeleteReviewModal from './DeleteReviewModal/DeleteReviewModal';
import './ReviewMainPage.css';

class ReviewMainPage extends Component {
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
            // make this modals pop from right side like a dropdown thing you know what i mean
            <div className="container">
                <div className="row">
                    <ReviewEditModal
                        clickedReviewProp={this.props.clickedReview}
                    />
                    <DeleteReviewModal
                        clickedReviewProp={this.props.clickedReview}
                    />
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
