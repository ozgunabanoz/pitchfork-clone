import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from './../../../store/actions/index';
import Layout from './Layout/Layout';
import './BestNewMusic.css';

class BestNewMusic extends Component {
  componentDidMount() {
    this.props.onGetBNM();
  }

  render() {
    return (
      <div className="container">
        <Layout />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onGetBNM: () => dispatch(actions.getBNM())
  };
};

export default connect(null, mapDispatchToProps)(BestNewMusic);
