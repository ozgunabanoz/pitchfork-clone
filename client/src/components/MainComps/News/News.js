import React, { Component } from 'react';
import { connect } from 'react-redux';

import Form from './../../UI/Form/Form';
import AddModal from './../../UI/Modal/AddModal/AddModal';
import * as actions from './../../../store/actions/index';
import './News.css';

class News extends Component {
  componentDidMount() {
    this.props.onGetNews();
  }

  render() {
    return (
      <div className="container">
        <AddModal itemClass="news" />
        <Form itemClass="news" />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onGetNews: () => dispatch(actions.getNews())
  };
};

export default connect(null, mapDispatchToProps)(News);
