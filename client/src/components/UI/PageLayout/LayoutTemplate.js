import React, { Component } from 'react';
import M from 'materialize-css';
import { connect } from 'react-redux';

import DeleteModal from './../Modal/DeleteModal/DeleteModal';
import EditModal from './../Modal/EditModal/EditModal';

class LayoutTemplate extends Component {
    componentDidMount() {
        let elems = document.querySelectorAll('.fixed-action-btn');
        M.FloatingActionButton.init(elems);
    }

    formatText = () => {
        let text = this.props[this.props.clickedItem].article
            .split('\n')
            .map((item, key) => {
                return (
                    <span>
                        &nbsp;&nbsp;&nbsp;&nbsp;{item}
                        <br />
                    </span>
                );
            });

        return text;
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
                                clickedItem={this.props[this.props.clickedItem]}
                                itemClass={this.props.itemClass}
                            />
                        </li>
                        <li key="newsDelModal">
                            <DeleteModal
                                clickedItem={this.props[this.props.clickedItem]}
                                itemClass={this.props.itemClass}
                                redirectAddress={this.props.redirectAddress}
                            />
                        </li>
                    </ul>
                </div>
                <h3>{this.props[this.props.clickedItem].title}</h3>
                <h3>{this.props[this.props.clickedItem].headline}</h3>
                <h5>By: {this.props[this.props.clickedItem].writer}</h5>
                <h5>
                    <div>{this.formatText()}</div>
                </h5>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        clickedNews: state.newsStore.clickedNews,
        clickedFeature: state.featuresStore.clickedFeature
    };
};

export default connect(mapStateToProps)(LayoutTemplate);
