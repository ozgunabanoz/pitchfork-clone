import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import { Link } from 'react-router-dom';

import * as actions from './../../store/actions/index';

const importAll = r => {
    return r.keys().map(r);
};

const images = importAll(
    require.context('./../../assets/albumCovers/', false, /\.(png|jpe?g|svg)$/)
); // figure out how to assign specific
// images to specific review entries

class ReviewForm extends Component {
    onReviewClick = review => {
        console.log(review);
        this.props.onClickReview(review);
    };

    renderColumns() {
        return _.map(this.props.reviews, review => {
            let url =
                '/reviews/albums/' +
                review.albumArtist +
                '/' +
                review.albumTitle;
            url = url.replace(/ /g, '-');
            return (
                <div key={review.albumTitle} className="col s2">
                    <div className="card z-depth-0">
                        <div className="card-image">
                            <img src="" />
                        </div>
                        <div className="card-content">
                            <div style={{ fontSize: 'x-small' }}>
                                <p
                                    style={{
                                        fontWeight: 'bold'
                                    }}
                                >
                                    {review.albumArtist}
                                </p>
                                <p
                                    style={{
                                        fontStyle: 'italic'
                                    }}
                                >
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
                            <div
                                style={{
                                    fontSize: 'xx-small',
                                    fontWeight: 'bold',
                                    marginTop: '10px'
                                }}
                            >
                                <p>{review.genre}</p>
                                <p>By: {review.writer}</p>
                            </div>
                        </div>
                    </div>
                </div>
            );
        });
    }

    renderReviews() {
        let reviewCols = this.renderColumns();
        let reviewRows = [];

        for (let i = 0; i < Math.ceil(reviewCols.length / 6); i++) {
            let columns = [];

            for (let j = 0; j < reviewCols.length; j++) {
                if (Math.floor(j / 6) === i) {
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
        return <div>{this.renderReviews()}</div>;
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
