import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import * as actions from './../../../../../store/actions/index';
import './ReviewCard.css';

class ReviewCard extends Component {
  onReviewClick = review => {
    this.props.onClickReview(review);
  };

  render() {
    return (
      <div className="card z-depth-0">
        <div className="card-image">
          <img src="" />
        </div>
        <div className="card-content">
          <div className="artisttitle">
            <p className="artist">{this.props.review.albumArtist}</p>
            <p className="albumtitle">
              <Link
                onClick={() => this.onReviewClick(this.props.review)}
                to={this.props.url}
              >
                {this.props.review.albumTitle}
              </Link>
            </p>
          </div>
          <div className="genrewriter">
            <p>{this.props.review.genre + ' '}</p>
            <p>By: {this.props.review.writer}</p>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onClickReview: review => dispatch(actions.onClickReview(review))
  };
};

export default connect(null, mapDispatchToProps)(ReviewCard);
