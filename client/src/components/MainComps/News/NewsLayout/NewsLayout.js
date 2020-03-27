import React, { Component } from 'react';
import { connect } from 'react-redux';

import LayoutTemplate from './../../../UI/PageLayout/LayoutTemplate';
import * as actions from './../../../../store/actions/index';

class NewsLayout extends Component {
  componentDidMount() {
    this.props.getNews();
  }

  render() {
    return (
      <LayoutTemplate
        clickedItem="clickedNews"
        itemClass="news"
        redirectAddress="/news"
        history={this.props.history}
      />
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getNews: () => dispatch(actions.getNews())
  };
};

export default connect(null, mapDispatchToProps)(NewsLayout);
