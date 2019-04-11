import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import { Link } from 'react-router-dom';

import './FeaturesForm.css';
import * as actions from './../../../store/actions/index';

class FeaturesForm extends Component {
    // continue styling and try to simplify the code
    generateUrl = featuresTitle => {
        let urlGen = '/features/item/' + featuresTitle;
        urlGen = urlGen.replace(/ /g, '-');

        return urlGen;
    };

    onFeaturesClick = feature => {
        this.props.onClickFeaturesProps(feature);
    };

    firstRow = () => {
        try {
            let genUrl = this.generateUrl(this.props.features[0].title);
            return (
                <div className="card z-depth-0">
                    <div className="card-image">
                        <img
                            src=""
                            // src={require(`./../../../assets/albumCovers${
                            //     this.props.propImg
                            // }`)}
                        />
                    </div>
                    <div className="card-content">
                        <div className="featurestitle">
                            <p className="ftitle">
                                <Link
                                    to={genUrl}
                                    onClick={() =>
                                        this.onFeaturesClick(
                                            this.props.features[0]
                                        )
                                    }
                                >
                                    {this.props.features[0].title}
                                </Link>
                            </p>
                            <p className="fheadline">
                                {this.props.features[0].headline}
                            </p>
                        </div>
                        <div className="featureswriter">
                            <p>By: {this.props.features[0].writer}</p>
                        </div>
                    </div>
                </div>
            );
        } catch (e) {
            console.log(e);
        }
    };

    secRow = () => {
        try {
            let secRowFeatures = this.props.features.slice(1, 5);

            return _.map(secRowFeatures, feature => {
                let genUrl = this.generateUrl(feature.title);

                return (
                    <div className="col s3">
                        <div className="card z-depth-0">
                            <div className="card-image">
                                <img src="" />
                            </div>
                            <div className="card-content">
                                <div className="featurestitle">
                                    <p className="ftitle">
                                        <Link
                                            to={genUrl}
                                            onClick={() =>
                                                this.onFeaturesClick(feature)
                                            }
                                        >
                                            {feature.title}
                                        </Link>
                                    </p>
                                </div>
                                <div className="featureswriter">
                                    <p>By: {feature.writer}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                );
            });
        } catch (e) {
            console.log(e);
        }
    };

    restRows = () => {
        try {
            let restRowFeatures = this.props.features.slice(5);

            return _.map(restRowFeatures, feature => {
                let genUrl = this.generateUrl(feature.title);

                return (
                    <div className="row">
                        <div className="col s4 offset-s4">
                            <div className="card z-depth-0">
                                <div className="card-image">
                                    <img src="" />
                                </div>
                                <div className="card-content">
                                    <div className="featurestitle">
                                        <p className="ftitle">
                                            <Link
                                                to={genUrl}
                                                onClick={() =>
                                                    this.onFeaturesClick(
                                                        feature
                                                    )
                                                }
                                            >
                                                {feature.title}
                                            </Link>
                                        </p>
                                    </div>
                                    <div className="featureswriter">
                                        <p>By: {feature.writer}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                );
            });
        } catch (e) {
            console.log(e);
        }
    };

    render() {
        return (
            <div>
                <div className="row">
                    <div className="col s12">{this.firstRow()}</div>
                </div>
                <div className="row">{this.secRow()}</div>
                <div>{this.restRows()}</div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        features: state.featuresStore.features
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onClickFeaturesProps: feature =>
            dispatch(actions.clickFeatures(feature))
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(FeaturesForm);
