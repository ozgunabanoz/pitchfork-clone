import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import MediaQuery from 'react-responsive';

import Card from './../Card/Card';

class Form extends Component {
    generateUrl = (itemTitle, itemClass) => {
        let prefix = '';

        if (itemClass === 'feature') {
            prefix = '/features/item/';
        } else if (itemClass === 'news') {
            prefix = '/news/item/';
        }

        let urlGen = prefix + itemTitle;
        urlGen = urlGen.replace(/ /g, '-');

        return urlGen;
    };

    firstRow = () => {
        try {
            let item = null;

            if (this.props.itemClass === 'feature') {
                item = this.props.features[0];
            } else if (this.props.itemClass === 'news') {
                item = this.props.news[0];
            }

            let genUrl = this.generateUrl(item.title, this.props.itemClass);
            let fRow = true;

            return (
                <Card
                    genUrlProp={genUrl}
                    itemProp={item}
                    fRowProp={fRow}
                    cardClass={this.props.itemClass}
                />
            );
        } catch (e) {
            console.log(e);
        }
    };

    secRow = () => {
        try {
            let secRowItems = null;
            let classType = true;

            if (this.props.itemClass === 'feature') {
                secRowItems = this.props.features.slice(1, 4);
                classType = true;
            } else if (this.props.itemClass === 'news') {
                secRowItems = this.props.news.slice(1, 5);
                classType = false;
            }

            return _.map(secRowItems, item => {
                let genUrl = this.generateUrl(item.title, this.props.itemClass);

                return (
                    <div className={classType ? 'col s4' : 'col s3'}>
                        <Card
                            genUrlProp={genUrl}
                            itemProp={item}
                            cardClass={this.props.itemClass}
                        />
                    </div>
                );
            });
        } catch (e) {
            console.log(e);
        }
    };

    thirdRow = () => {
        try {
            let thirdRowItems = null;

            if (this.props.itemClass === 'feature') {
                thirdRowItems = this.props.features.slice(4, 10);
            } else if (this.props.itemClass === 'news') {
                thirdRowItems = this.props.news.slice(5);
            }

            return _.map(thirdRowItems, item => {
                let genUrl = this.generateUrl(item.title, this.props.itemClass);

                return (
                    <div className="row">
                        <div className="col s8">
                            <Card
                                genUrlProp={genUrl}
                                itemProp={item}
                                cardClass={this.props.itemClass}
                            />
                        </div>
                    </div>
                );
            });
        } catch (e) {
            console.log(e);
        }
    };

    renderRestRows = () => {
        try {
            let restFeatureCols = this.restRows();
            let restFeatureRows = [];

            for (let i = 0; i < Math.ceil(restFeatureCols.length / 4); i++) {
                let columns = [];

                for (let j = 0; j < restFeatureCols.length; j++) {
                    if (Math.floor(j / 4) === i) {
                        columns.push(restFeatureCols[j]);
                    }
                }

                restFeatureRows.push(
                    <div key={i} className="row">
                        {columns}
                    </div>
                );
            }
            return restFeatureRows;
        } catch (e) {
            console.log(e);
        }
    };

    restRows = () => {
        try {
            let restRowFeatures = this.props.features.slice(10);

            return _.map(restRowFeatures, feature => {
                let genUrl = this.generateUrl(
                    feature.title,
                    this.props.itemClass
                );

                return (
                    <div className="col s3">
                        <Card
                            genUrlProp={genUrl}
                            itemProp={feature}
                            cardClass={this.props.itemClass}
                        />
                    </div>
                );
            });
        } catch (e) {
            console.log(e);
        }
    };

    mobileRows = () => {
        try {
            let mobileItems = null;

            if (this.props.itemClass === 'feature') {
                mobileItems = this.props.features;
            } else if (this.props.itemClass === 'news') {
                mobileItems = this.props.news;
            }

            return _.map(mobileItems, item => {
                let genUrl = this.generateUrl(item.title, this.props.itemClass);

                return (
                    <div className="row">
                        <div className="col s12">
                            <Card
                                genUrlProp={genUrl}
                                itemProp={item}
                                cardClass={this.props.itemClass}
                            />
                        </div>
                    </div>
                );
            });
        } catch (e) {
            console.log(e);
        }
    };

    render() {
        let itemClassFlag = true;

        if (this.props.itemClass === 'feature') {
            itemClassFlag = true;
        } else if (this.props.itemClass === 'news') {
            itemClassFlag = false;
        }
        return (
            <div>
                <MediaQuery minDeviceWidth={601}>
                    <div className="row">
                        <div className="col s12">{this.firstRow()}</div>
                    </div>
                    <div className="row">{this.secRow()}</div>
                    <div>{this.thirdRow()}</div>
                    {itemClassFlag ? this.renderRestRows() : null}
                </MediaQuery>
                <MediaQuery maxDeviceWidth={600}>
                    <div>{this.mobileRows()}</div>
                </MediaQuery>
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
