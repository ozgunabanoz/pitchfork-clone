import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

class NoPage extends Component {
    // for redirecting
    render() {
        let flag = false;
        let det = '';

        try {
            det = this.props.links.indexOf(
                this.props.history.location.pathname
            );
        } catch (e) {}

        if (det !== -1) {
            flag = true;
        }

        return <div>{flag ? <div /> : <Redirect to="/" />}</div>;
    }
}

const mapStateToProps = state => {
    return {
        links: state.regist.links
    };
};
export default connect(mapStateToProps)(NoPage);
