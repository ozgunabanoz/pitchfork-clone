import React, { Component } from 'react';
import { connect } from 'react-redux';

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
            <div
                className="container"
                style={{
                    width: '80%',
                    marginTop: '50px',
                    fontSize: 'small',
                    textAlign: 'justify'
                }}
            >
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
