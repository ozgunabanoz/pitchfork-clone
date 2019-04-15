// for features and news only

import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import MediaQuery from 'react-responsive';

import ScreenAttributes from './ScreenAttributes';
import RowGenerator from './RowGenerator';
import Spinner from '../Spinner/Spinner';

class Form extends Component {
    render() {
        let item = null;
        let scrAttr = null;
        let showScreen = false;
        let firstItem = null;

        try {
            if (this.props.itemClass === 'feature') {
                item = this.props.features;
                firstItem = this.props.features[0];
                scrAttr = ScreenAttributes.features;
                showScreen = true;
            } else if (this.props.itemClass === 'news') {
                item = this.props.news;
                scrAttr = ScreenAttributes.news;
                firstItem = this.props.news[0];
                showScreen = true;
                try {
                    scrAttr.thirdRowSliceNum = this.props.news.length;
                } catch (e) {}
            }
        } catch (e) {}

        return (
            <div>
                {showScreen ? (
                    <div>
                        <MediaQuery minDeviceWidth={601}>
                            <div className="row">
                                <RowGenerator
                                    items={{ firstItem }}
                                    props={scrAttr.props}
                                    colAttr={scrAttr.firstRowColAttr}
                                    fRowFlag={true}
                                    rDetFlag={false}
                                    cardFunc={scrAttr.cardFunc}
                                />
                            </div>
                            <div className="row">
                                <RowGenerator
                                    items={item.slice(
                                        1,
                                        scrAttr.secRowSliceNum
                                    )}
                                    props={scrAttr.props}
                                    colAttr={scrAttr.secRowColAttr}
                                    fRowFlag={false}
                                    rDetFlag={false}
                                    cardFunc={scrAttr.cardFunc}
                                />
                            </div>
                            <div>
                                <RowGenerator
                                    items={item.slice(
                                        scrAttr.secRowSliceNum,
                                        scrAttr.thirdRowSliceNum
                                    )}
                                    props={scrAttr.props}
                                    colAttr={scrAttr.thirdRowColAttr}
                                    fRowFlag={false}
                                    rDetFlag={true}
                                    cardFunc={scrAttr.cardFunc}
                                />
                            </div>
                            {scrAttr.itemClassFlag ? (
                                <RowGenerator
                                    itemClassFlag={scrAttr.itemClassFlag}
                                    item={item}
                                    scrAttr={scrAttr}
                                    cardFunc={scrAttr.cardFunc}
                                />
                            ) : null}
                        </MediaQuery>
                        <MediaQuery maxDeviceWidth={600}>
                            <div>
                                <RowGenerator
                                    items={item}
                                    props={scrAttr.props}
                                    colAttr={scrAttr.mobColAttr}
                                    fRowFlag={false}
                                    rDetFlag={true}
                                    cardFunc={scrAttr.cardFunc}
                                />
                            </div>
                        </MediaQuery>
                    </div>
                ) : (
                    <Spinner />
                )}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        news: state.newsStore.news,
        features: state.featuresStore.features
    };
};

export default connect(mapStateToProps)(Form);
