import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';

import * as actions from './../store/actions/index';
import albumCover from './../assets/albumCovers/36Chambers.jpg'; // figure out a neat way to get album covers

class Reviews extends Component {
    componentDidMount() {
        this.props.onGetReviews();
    }

    renderReviews() {
        console.log(this.props.reviews);
        return _.map(this.props.reviews, review => {
            // this part is incomplete and only works for just 6 reviews, correct this at a later date
            // and also make the cards size fixed
            return (
                <div className="col s2">
                    <div className="card">
                        <div className="card-image">
                            <img src={albumCover} />
                        </div>
                        <div className="card-content">
                            <p style={{ fontSize: 'medium', fontWeight: 'bold' }}>
                                {review.albumArtist}
                            </p>
                            <p
                                style={{
                                    fontSize: 'medium',
                                    fontStyle: 'italic',
                                    marginTop: '5px'
                                }}
                            >
                                {review.albumTitle}
                            </p>
                            <p
                                style={{
                                    fontSize: 'x-small',
                                    fontWeight: 'bold',
                                    marginTop: '10px'
                                }}
                            >
                                {review.genre}
                            </p>
                            <p style={{ fontSize: 'x-small', fontWeight: 'bold' }}>
                                By: {review.writer}
                            </p>
                        </div>
                    </div>
                </div>
            );
        });
    }

    render() {
        return (
            <div
                className="container"
                style={{ width: '80%', marginTop: '80px', textAlign: 'center' }}
            >
                <div className="row">{this.renderReviews()}</div>
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
