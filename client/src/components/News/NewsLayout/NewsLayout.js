import React, { Component } from 'react';
import M from 'materialize-css';
import { connect } from 'react-redux';

import DeleteNewsModal from './DeleteNewsModal/DeleteNewsModal';
import EditNewsModal from './EditNewsModal/EditNewsModal';
import './NewsLayout.css';

class NewsLayout extends Component {
    componentDidMount() {
        let elems = document.querySelectorAll('.fixed-action-btn');
        M.FloatingActionButton.init(elems);
    }

    formatNews = () => {
        let news = this.props.clickedNews.article
            .split('\n')
            .map((item, key) => {
                return (
                    <span>
                        &nbsp;&nbsp;&nbsp;&nbsp;{item}
                        <br />
                    </span>
                );
            });

        console.log(news);
        return news;
    };

    render() {
        return (
            <div
                className="container"
                style={{ textAlign: 'justify', fontSize: 'small' }}
            >
                <div className="fixed-action-btn">
                    <a className="btn-floating btn-large red">
                        <i className="large material-icons">mode_edit</i>
                    </a>
                    <ul>
                        <li key="newsEditModal">
                            <EditNewsModal
                                clickedNewsProp={this.props.clickedNews}
                            />
                        </li>
                        <li key="newsDelModal">
                            <DeleteNewsModal
                                clickedNewsProp={this.props.clickedNews}
                            />
                        </li>
                    </ul>
                </div>
                <h3>{this.props.clickedNews.title}</h3>
                <h3>{this.props.clickedNews.headline}</h3>
                <h5>By: {this.props.clickedNews.writer}</h5>
                <h5>
                    <div>{this.formatNews()}</div>
                </h5>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        clickedNews: state.newsStore.clickedNews
    };
};

export default connect(mapStateToProps)(NewsLayout);
