import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import { Link } from 'react-router-dom';

import './NewsForm.css';
import * as actions from './../../../store/actions/index';

class NewsForm extends Component {
    // continue styling and try to simplify the code
    generateUrl = newsTitle => {
        let urlGen = '/news/item/' + newsTitle;
        urlGen = urlGen.replace(/ /g, '-');

        return urlGen;
    };

    onNewsClick = news => {
        this.props.onClickNewsProps(news);
    };

    firstRow = () => {
        try {
            let genUrl = this.generateUrl(this.props.news[0].title);
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
                        <div className="newstitle">
                            <p className="ntitle">
                                <Link
                                    to={genUrl}
                                    onClick={() =>
                                        this.onNewsClick(this.props.news[0])
                                    }
                                >
                                    {this.props.news[0].title}
                                </Link>
                            </p>
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
                let genUrl = this.generateUrl(news.title);

                return (
                    <div className="col s3">
                        <div className="card z-depth-0">
                            <div className="card-image">
                                <img src="" />
                            </div>
                            <div className="card-content">
                                <div className="newstitle">
                                    <p className="ntitle">
                                        <Link
                                            to={genUrl}
                                            onClick={() =>
                                                this.onNewsClick(news)
                                            }
                                        >
                                            {news.title}
                                        </Link>
                                    </p>
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
                let genUrl = this.generateUrl(news.title);

                return (
                    <div className="row">
                        <div className="col s4 offset-s4">
                            <div className="card z-depth-0">
                                <div className="card-image">
                                    <img src="" />
                                </div>
                                <div className="card-content">
                                    <div className="newstitle">
                                        <p className="ntitle">
                                            <Link
                                                to={genUrl}
                                                onClick={() =>
                                                    this.onNewsClick(news)
                                                }
                                            >
                                                {news.title}
                                            </Link>
                                        </p>
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

const mapDispatchToProps = dispatch => {
    return { onClickNewsProps: news => dispatch(actions.clickNews(news)) };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(NewsForm);
