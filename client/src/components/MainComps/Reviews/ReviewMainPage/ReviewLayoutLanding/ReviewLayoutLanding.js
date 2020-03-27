import React, { Component } from 'react';
import M from 'materialize-css';

import './ReviewLayoutLanding.css';
import ReviewEditModal from './../ReviewEditModal/ReviewEditModal';
import DeleteReviewModal from './../DeleteReviewModal/DeleteReviewModal';

class ReviewLayoutLanding extends Component {
  componentDidMount() {
    let elems = document.querySelectorAll('.fixed-action-btn');
    M.FloatingActionButton.init(elems);
  }

  // continue styling later
  formatReview = () => {
    let review = this.props.propToSend.review
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
                clickedReviewProp={this.props.propToSend}
                callMe={item => this.props.callMe(item)}
              />
            </li>
            <li key="reviewDelModal">
              <DeleteReviewModal
                clickedReviewProp={this.props.propToSend}
              />
            </li>
          </ul>
        </div>
        <h3>{this.props.propToSend.albumTitle}</h3>
        <h3>{this.props.propToSend.albumArtist}</h3>
        <h5>By: {this.props.propToSend.writer}</h5>
        <h5>
          <div>{this.formatReview()}</div>
        </h5>
      </div>
    );
  }
}

export default ReviewLayoutLanding;
