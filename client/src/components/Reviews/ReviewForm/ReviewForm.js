import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import MediaQuery from 'react-responsive';

import ReviewCard from './ReviewCard/ReviewCard';
import screenAttributes from './ScreenAttributes';

class ReviewForm extends Component {
    genUrl = review => {
        let url =
            '/reviews/albums/' + review.albumArtist + '/' + review.albumTitle;
        url = url.replace(/ /g, '-');

        return url;
    };

    renderColumns(colAttr) {
        return _.map(this.props.reviews, review => {
            let url = this.genUrl(review);

            return (
                <div key={review.albumTitle} className={colAttr}>
                    <ReviewCard review={review} url={url} />
                </div>
            );
        });
    }

    renderReviews(scrAttr) {
        let reviewCols = this.renderColumns(scrAttr.colAttr);
        let reviewRows = [];

        for (
            let i = 0;
            i < Math.ceil(reviewCols.length / scrAttr.colNum);
            i++
        ) {
            let columns = [];

            for (let j = 0; j < reviewCols.length; j++) {
                if (Math.floor(j / scrAttr.colNum) === i) {
                    columns.push(reviewCols[j]);
                }
            }

            reviewRows.push(
                <div key={i} className="row">
                    {columns}
                </div>
            );
        }
        return reviewRows;
    }

    render() {
        return (
            <div>
                <MediaQuery minDeviceWidth={993}>
                    {this.renderReviews(screenAttributes.largeScreen)}
                </MediaQuery>
                <MediaQuery maxDeviceWidth={992}>
                    <MediaQuery minDeviceWidth={601}>
                        {this.renderReviews(screenAttributes.mediumScreen)}
                    </MediaQuery>
                    <MediaQuery maxDeviceWidth={600}>
                        {this.renderReviews(screenAttributes.smallScreen)}
                    </MediaQuery>
                </MediaQuery>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        reviews: state.reviewStore.reviews
    };
};

export default connect(mapStateToProps)(ReviewForm);
