import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from './../../store/actions/index';
import './Features.css';
import AddFeaturesModal from './AddFeaturesModal/AddFeaturesModal';
import Form from './../Form/Form';

class Features extends Component {
    componentDidMount() {
        this.props.onGetFeatures();
    }

    render() {
        return (
            <div className="container">
                <AddFeaturesModal />
                <Form itemClass="feature" />
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onGetFeatures: () => dispatch(actions.getFeatures())
    };
};

export default connect(
    null,
    mapDispatchToProps
)(Features);
