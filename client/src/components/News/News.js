import React, { Component } from 'react';
import { connect } from 'react-redux';

import Form from './../Form/Form';
import AddNewsModal from './AddNewsModal/AddNewsModal';
import * as actions from './../../store/actions/index';
import './News.css';

class News extends Component {
    componentDidMount() {
        this.props.onGetNews();
    }

    render() {
        return (
            <div className="container">
                <AddNewsModal />
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

export default connect(
    null,
    mapDispatchToProps
)(News);
