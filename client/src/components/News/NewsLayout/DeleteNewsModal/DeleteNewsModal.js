import React, { Component } from 'react';
import M from 'materialize-css';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import * as actions from './../../../../store/actions/index';
import './DeleteNewsModal.css';

class DeleteNewsModal extends Component {
    state = {
        news: {},
        redirect: false
    };

    componentDidMount() {
        let elems = document.querySelectorAll('.modal');
        M.Modal.init(elems);
        this.setState({ news: this.props.clickedNewsProp });
        this.setState({ redirect: false });
    }

    onDeleteClick = event => {
        event.preventDefault();
        this.props.onDelNews(this.state.news);
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
                            <h4>Delete this news</h4>
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
                {this.state.redirect ? <Redirect to="/news" /> : null}
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onDelNews: news => dispatch(actions.deleteNews(news))
    };
};

export default connect(
    null,
    mapDispatchToProps
)(DeleteNewsModal);
