import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

class MainPage extends Component {
  render() {
    let pageContent = (
      <div style={{ textAlign: 'center' }}>
        <h3>Welcome</h3>
      </div>
    );

    if (this.props.userName) {
      pageContent = <Redirect to="/news" />;
    }

    return <div>{pageContent}</div>;
  }
}

const mapStateToProps = state => {
  return {
    userName: state.regist.username !== null
  };
};

export default connect(mapStateToProps)(MainPage);
