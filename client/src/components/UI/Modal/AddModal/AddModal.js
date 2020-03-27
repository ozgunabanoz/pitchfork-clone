import React, { Component } from 'react';
import M from 'materialize-css';
import { connect } from 'react-redux';

import * as actions from './../../../../store/actions/index';
import './AddModal.css';

class AddModal extends Component {
  state = {
    feature: {
      title: '',
      headline: '',
      article: ''
    },
    news: {
      title: '',
      headline: '',
      article: ''
    }
  };

  componentDidMount() {
    let elems = document.querySelectorAll('.modal');
    M.Modal.init(elems);
  }

  onChangeHandler = (event, input) => {
    const updatedElement = {
      ...this.state[this.props.itemClass],
      [input]: event.target.value
    };

    this.setState({ [this.props.itemClass]: updatedElement });
  };

  generateUrl = (title, prefix) => {
    let urlGen = prefix + title;
    urlGen = urlGen.replace(/ /g, '-');

    return urlGen;
  };

  onSubmitHandler = event => {
    event.preventDefault();

    if (this.props.itemClass === 'feature') {
      this.props.onPostFeatures(this.state[this.props.itemClass]);
    } else if (this.props.itemClass === 'news') {
      this.props.onPostNews(this.state[this.props.itemClass]);
    }

    this.setState({
      [this.props.itemClass]: {
        title: '',
        headline: '',
        article: ''
      }
    });
  };

  render() {
    return (
      <div className="row">
        <div className="col s1 offset-s11">
          <a className="btn-floating modal-trigger" href="#modal1">
            <i className="medium material-icons">create</i>
          </a>
          <div id="modal1" className="modal">
            <div className="modal-content">
              <form
                autoComplete="off"
                onSubmit={this.onSubmitHandler}
              >
                <input
                  placeholder="Title"
                  value={this.state[this.props.itemClass].title}
                  onChange={event =>
                    this.onChangeHandler(event, 'title')
                  }
                />
                <input
                  placeholder="Headline"
                  value={this.state[this.props.itemClass].headline}
                  onChange={event =>
                    this.onChangeHandler(event, 'headline')
                  }
                />
                <textarea
                  placeholder="Article"
                  value={this.state[this.props.itemClass].article}
                  onChange={event =>
                    this.onChangeHandler(event, 'article')
                  }
                />
                <button
                  href="#!"
                  className="modal-close right btn-flat"
                  type="submit"
                >
                  Send
                </button>
              </form>
            </div>
            <div className="modal-footer" />
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onPostFeatures: feature =>
      dispatch(actions.postFeatures(feature)),
    onPostNews: news => dispatch(actions.postNews(news))
  };
};

export default connect(null, mapDispatchToProps)(AddModal);
