import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from './../../store/actions/index';
import './Features.css';
import AddFeaturesModal from './AddFeaturesModal/AddFeaturesModal';
import FeaturesForm from './FeaturesForm/FeaturesForm';

class Features extends Component {
    componentDidMount() {
        this.props.onGetFeatures();
    }

    render() {
        return (
            <div className="container">
                <AddFeaturesModal />
                <FeaturesForm />
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
