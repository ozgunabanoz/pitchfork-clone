import React, { Component } from 'react';
import { connect } from 'react-redux';
import MediaQuery from 'react-responsive';

import RowGenerator from './RowGenerator';
import screenAttributes from './ScreenAttributes';

class ReviewForm extends Component {
    render() {
        return (
            <div>
                <MediaQuery minDeviceWidth={993}>
                    <RowGenerator
                        items={this.props.reviews}
                        scrAttr={screenAttributes.largeScreen}
                        prefix={screenAttributes.linkPrefix}
                    />
                </MediaQuery>
                <MediaQuery maxDeviceWidth={992}>
                    <MediaQuery minDeviceWidth={601}>
                        <RowGenerator
                            items={this.props.reviews}
                            scrAttr={screenAttributes.mediumScreen}
                            prefix={screenAttributes.linkPrefix}
                        />
                    </MediaQuery>
                    <MediaQuery maxDeviceWidth={600}>
                        <RowGenerator
                            items={this.props.reviews}
                            scrAttr={screenAttributes.smallScreen}
                            prefix={screenAttributes.linkPrefix}
                        />
                    </MediaQuery>
                </MediaQuery>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        reviews: state.reviewStore.reviews
    };
};

export default connect(mapStateToProps)(ReviewForm);
