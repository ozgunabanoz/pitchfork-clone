import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';

import * as actions from './../store/actions/index';

const importAll = r => {
    return r.keys().map(r);
};

const images = importAll(
    require.context('./../assets/albumCovers/', false, /\.(png|jpe?g|svg)$/)
); // figure out how to assign specific
// images to specific review entries

class Reviews extends Component {
    componentDidMount() {
        this.props.onGetReviews();
    }

    renderColumns() {
        return _.map(this.props.reviews, review => {
            return (
                <div key={review.albumTitle} className="col s2">
                    <div className="card z-depth-0">
                        <div className="card-image">
                            <img src="" />
                        </div>
                        <div className="card-content">
                            <p
                                style={{
                                    fontSize: 'x-small',
                                    fontWeight: 'bold'
                                }}
                            >
                                {review.albumArtist}
                            </p>
                            <p
                                style={{
                                    fontSize: 'x-small',
                                    fontStyle: 'italic'
                                }}
                            >
                                {review.albumTitle}
                            </p>
                            <p
                                style={{
                                    fontSize: 'xx-small',
                                    fontWeight: 'bold',
                                    marginTop: '10px'
                                }}
                            >
                                {review.genre}
                            </p>
                            <p
                                style={{
                                    fontSize: 'xx-small',
                                    fontWeight: 'bold'
                                }}
                            >
                                By: {review.writer}
                            </p>
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
        return (
            <div
                className="container"
                style={{ width: '80%', marginTop: '80px', textAlign: 'center' }}
            >
                {this.renderReviews()}
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
        onGetReviews: () => dispatch(actions.getReviews())
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Reviews);
