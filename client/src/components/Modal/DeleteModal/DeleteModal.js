import React, { Component } from 'react';
import M from 'materialize-css';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import * as actions from './../../../store/actions/index';
import './DeleteModal.css';

class DeleteModal extends Component {
    state = {
        news: {},
        feature: {},
        redirect: false
    };

    componentDidMount() {
        let elems = document.querySelectorAll('.modal');
        M.Modal.init(elems);
        this.setState({ [this.props.itemClass]: this.props.clickedItem });
        this.setState({ redirect: false });
    }

    onDeleteClick = event => {
        event.preventDefault();

        if (this.props.itemClass === 'feature') {
            this.props.onDelFeatures(this.state[this.props.itemClass]);
        } else if (this.props.itemClass === 'news') {
            this.props.onDelNews(this.state[this.props.itemClass]);
        }

        this.setState({ redirect: true });
    };

    render() {
        return (
            <div>
                <a className="btn-floating modal-trigger" href="#modal2">
                    <i className="small material-icons">clear</i>
                </a>

                <div id="modal2" className="modal">
                    <div className="modal-content">
                        <form onSubmit={this.onDeleteClick}>
                            <h4>Delete this {this.props.itemClass}</h4>
                            <p>Are you sure?</p>
                            <button
                                href="#!"
                                className="modal-close btn-flat"
                                type="submit"
                            >
                                Agree
                            </button>
                        </form>
                    </div>
                </div>
                {this.state.redirect ? (
                    <Redirect to={this.props.redirectAddress} />
                ) : null}
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onDelNews: news => dispatch(actions.deleteNews(news)),
        onDelFeatures: feature => dispatch(actions.deleteFeatures(feature))
    };
};

export default connect(
    null,
    mapDispatchToProps
)(DeleteModal);
