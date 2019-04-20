import React, { Component } from 'react';
import { connect } from 'react-redux';

import LayoutTemplate from './../../../UI/PageLayout/LayoutTemplate';
import * as actions from './../../../../store/actions/index';

class FeaturesLayout extends Component {
    componentDidMount() {
        this.props.getFeatures();
    }

    render() {
        return (
            <LayoutTemplate
                clickedItem="clickedFeature"
                itemClass="feature"
                redirectAddress="/features"
                history={this.props.history}
            />
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getFeatures: () => dispatch(actions.getFeatures())
    };
};

export default connect(
    null,
    mapDispatchToProps
)(FeaturesLayout);
