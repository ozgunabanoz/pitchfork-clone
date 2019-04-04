import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../../store/actions/index';
import ReviewModal from './ReviewModal';
import ReviewForm from './ReviewForm';

class Reviews extends Component {
    componentDidMount() {
        this.props.onGetReviews();
    }

    render() {
        return (
            <div
                className="container"
                style={{ width: '80%', marginTop: '50px', textAlign: 'center' }}
            >
                <ReviewModal />
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
