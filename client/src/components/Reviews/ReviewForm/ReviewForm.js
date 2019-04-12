import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import { Link } from 'react-router-dom';
import MediaQuery from 'react-responsive';

import * as actions from '../../../store/actions/index';
import './ReviewForm.css';

const importAll = r => {
    return r.keys().map(r);
};

const images = importAll(
    require.context(
        './../../../assets/albumCovers/',
        false,
        /\.(png|jpe?g|svg)$/
    )
); // figure out how to assign specific
// images to specific review entries

class ReviewForm extends Component {
    onReviewClick = review => {
        this.props.onClickReview(review);
    };

    renderColumns(colNum) {
        return _.map(this.props.reviews, review => {
            let url =
                '/reviews/albums/' +
                review.albumArtist +
                '/' +
                review.albumTitle;
            url = url.replace(/ /g, '-');

            if (colNum === 6) {
                return (
                    <div key={review.albumTitle} className="col l2">
                        <div className="card z-depth-0">
                            <div className="card-image">
                                <img src="" />
                            </div>
                            <div className="card-content">
                                <div className="artisttitle">
                                    <p className="artist">
                                        {review.albumArtist}
                                    </p>
                                    <p className="albumtitle">
                                        <Link
                                            onClick={() =>
                                                this.onReviewClick(review)
                                            }
                                            to={url}
                                        >
                                            {review.albumTitle}
                                        </Link>
                                    </p>
                                </div>
                                <div className="genrewriter">
                                    <p>{review.genre}</p>
                                    <p>By: {review.writer}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                );
            } else if (colNum === 2) {
                return (
                    <div key={review.albumTitle} className="col m6">
                        <div className="card z-depth-0">
                            <div className="card-image">
                                <img src="" />
                            </div>
                            <div className="card-content">
                                <div className="artisttitle">
                                    <p className="artist">
                                        {review.albumArtist}
                                    </p>
                                    <p className="albumtitle">
                                        <Link
                                            onClick={() =>
                                                this.onReviewClick(review)
                                            }
                                            to={url}
                                        >
                                            {review.albumTitle}
                                        </Link>
                                    </p>
                                </div>
                                <div className="genrewriter">
                                    <p>{review.genre}</p>
                                    <p>By: {review.writer}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                );
            } else if (colNum === 1) {
                return (
                    <div key={review.albumTitle} className="col s12">
                        <div className="card z-depth-0">
                            <div className="card-image">
                                <img src="" />
                            </div>
                            <div className="card-content">
                                <div className="artisttitle">
                                    <p className="artist">
                                        {review.albumArtist}
                                    </p>
                                    <p className="albumtitle">
                                        <Link
                                            onClick={() =>
                                                this.onReviewClick(review)
                                            }
                                            to={url}
                                        >
                                            {review.albumTitle}
                                        </Link>
                                    </p>
                                </div>
                                <div className="genrewriter">
                                    <p>{review.genre}</p>
                                    <p>By: {review.writer}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                );
            }
        });
    }

    renderReviews(colNum) {
        let reviewCols = this.renderColumns(colNum);
        let reviewRows = [];

        for (let i = 0; i < Math.ceil(reviewCols.length / colNum); i++) {
            let columns = [];

            for (let j = 0; j < reviewCols.length; j++) {
                if (Math.floor(j / colNum) === i) {
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
                    {this.renderReviews(6)}
                </MediaQuery>
                <MediaQuery maxDeviceWidth={992}>
                    <MediaQuery minDeviceWidth={601}>
                        {this.renderReviews(2)}
                    </MediaQuery>
                    <MediaQuery maxDeviceWidth={600}>
                        {this.renderReviews(1)}
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

const mapDispatchToProps = dispatch => {
    return {
        onClickReview: review => dispatch(actions.onClickReview(review))
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ReviewForm);
