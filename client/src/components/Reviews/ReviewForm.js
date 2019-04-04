import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';

const importAll = r => {
    return r.keys().map(r);
};

const images = importAll(
    require.context('./../../assets/albumCovers/', false, /\.(png|jpe?g|svg)$/)
); // figure out how to assign specific
// images to specific review entries

class ReviewForm extends Component {
    renderColumns() {
        return _.map(this.props.reviews, review => {
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
                                    {review.albumTitle}
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

export default connect(mapStateToProps)(ReviewForm);
