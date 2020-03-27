// for features and news sections

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import * as actions from '../../../store/actions/index';
import './Card.css';

class Card extends Component {
  onLinkClick = (clickedItem, cardClass) => {
    this.props[this.props.cardFunc](clickedItem);
  };

  render() {
    let headline = null;

    if (this.props.fRowProp) {
      headline = (
        <p className="iheadline">{this.props.itemProp.headline}</p>
      );
    }

    return (
      <div className="card z-depth-0">
        <div className="card-image">
          <img
            src=" "
            // src={require(`./../../../assets/albumCovers${
            //     this.props.propImg
            // }`)}
          />
        </div>
        <div className="card-content">
          <div className="itemtitle">
            <p className="ititle">
              <Link
                to={this.props.genUrlProp}
                onClick={() =>
                  this.onLinkClick(
                    this.props.itemProp,
                    this.props.cardClass
                  )
                }
              >
                {this.props.itemProp.title}
              </Link>
            </p>
            {headline}
          </div>
          <div className="itemwriter">
            <p>By: {this.props.itemProp.writer}</p>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onFeaturesClickProp: feature =>
      dispatch(actions.clickFeatures(feature)),
    onNewsClickProp: news => dispatch(actions.clickNews(news))
  };
};

export default connect(null, mapDispatchToProps)(Card);
