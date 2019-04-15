import React, { Component } from 'react';

import LayoutTemplate from './../../../UI/PageLayout/LayoutTemplate';

class FeaturesLayout extends Component {
    render() {
        return (
            <LayoutTemplate
                clickedItem="clickedFeature"
                itemClass="feature"
                redirectAddress="/features"
            />
        );
    }
}

export default FeaturesLayout;
