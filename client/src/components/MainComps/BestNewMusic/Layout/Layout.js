import React, { Component } from 'react';
import { connect } from 'react-redux';
import MediaQuery from 'react-responsive';

import RowGenerator from './../../Reviews/ReviewForm/RowGenerator';
import screenAttributes from './ScreenAttributes';

class Layout extends Component {
    render() {
        return (
            <>
                <MediaQuery minDeviceWidth={993}>
                    <RowGenerator
                        items={this.props.BNM}
                        scrAttr={screenAttributes.largeScreen}
                        prefix={screenAttributes.linkPrefix}
                    />
                </MediaQuery>
                <MediaQuery maxDeviceWidth={992}>
                    <MediaQuery minDeviceWidth={601}>
                        <RowGenerator
                            items={this.props.BNM}
                            scrAttr={screenAttributes.mediumScreen}
                            prefix={screenAttributes.linkPrefix}
                        />
                    </MediaQuery>
                    <MediaQuery maxDeviceWidth={600}>
                        <RowGenerator
                            items={this.props.BNM}
                            scrAttr={screenAttributes.smallScreen}
                            prefix={screenAttributes.linkPrefix}
                        />
                    </MediaQuery>
                </MediaQuery>
            </>
        );
    }
}

const mapStateToProps = state => {
    return {
        BNM: state.BNMStore.BNM
    };
};

export default connect(mapStateToProps)(Layout);
