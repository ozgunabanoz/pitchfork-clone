import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../../../store/actions/index';
import AddReviewModal from './AddReviewModal/AddReviewModal';
import ReviewForm from './ReviewForm/ReviewForm';
import './Reviews.css';

class Reviews extends Component {
    componentDidMount() {
        this.props.onGetReviews();
    }

    render() {
        return (
            <div className="container">
                <AddReviewModal />
                <ReviewForm />
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onGetReviews: () => dispatch(actions.getReviews())
    };
};

export default connect(
    null,
    mapDispatchToProps
)(Reviews);
