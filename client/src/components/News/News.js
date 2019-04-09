import React, { Component } from 'react';
import { connect } from 'react-redux';

import NewsForm from './NewsForm/NewsForm';
import AddNewsModal from './AddNewsModal/AddNewsModal';
import * as actions from './../../store/actions/index';
import './News.css';

class News extends Component {
    componentDidMount() {
        this.props.onGetReviews();
    }

    render() {
        return (
            <div className="container">
                <AddNewsModal />
                <NewsForm />
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onGetReviews: () => dispatch(actions.getNews())
    };
};

export default connect(
    null,
    mapDispatchToProps
)(News);
