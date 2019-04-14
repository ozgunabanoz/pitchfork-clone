import React, { Component } from 'react';
import M from 'materialize-css';
import { connect } from 'react-redux';

import DeleteModal from './../../Modal/DeleteModal/DeleteModal';
import EditModal from './../../Modal/EditModal/EditModal';
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
                            <EditModal
                                clickedItem={this.props.clickedNews}
                                itemClass="news"
                            />
                        </li>
                        <li key="newsDelModal">
                            <DeleteModal
                                clickedItem={this.props.clickedNews}
                                itemClass="news"
                                redirectAddress="/news"
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
