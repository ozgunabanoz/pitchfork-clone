import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';

import './NewsForm.css';

class NewsForm extends Component {
    // continue styling and try to simplify the code
    firstRow = () => {
        try {
            return (
                <div className="card z-depth-0">
                    <div className="card-image">
                        <img src="" />
                    </div>
                    <div className="card-content">
                        <div className="newstitle">
                            <p className="ntitle">{this.props.news[0].title}</p>
                            <p className="nheadline">
                                {this.props.news[0].headline}
                            </p>
                        </div>
                        <div className="newswriter">
                            <p>By: {this.props.news[0].writer}</p>
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
            let secRowNews = this.props.news.slice(1, 5);

            return _.map(secRowNews, news => {
                return (
                    <div className="col s3">
                        <div className="card z-depth-0">
                            <div className="card-image">
                                <img src="" />
                            </div>
                            <div className="card-content">
                                <div className="newstitle">
                                    <p className="ntitle">{news.title}</p>
                                </div>
                                <div className="newswriter">
                                    <p>By: {news.writer}</p>
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
            let restRowNews = this.props.news.slice(5);

            return _.map(restRowNews, news => {
                return (
                    <div className="row">
                        <div className="col s4 offset-s4">
                            <div className="card z-depth-0">
                                <div className="card-image">
                                    <img src="" />
                                </div>
                                <div className="card-content">
                                    <div className="newstitle">
                                        <p className="ntitle">{news.title}</p>
                                    </div>
                                    <div className="newswriter">
                                        <p>By: {news.writer}</p>
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
        news: state.newsStore.news
    };
};

export default connect(mapStateToProps)(NewsForm);
