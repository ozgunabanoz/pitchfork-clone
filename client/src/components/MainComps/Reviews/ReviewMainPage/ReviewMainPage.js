import React, { Component } from 'react';
import { connect } from 'react-redux';

import ReviewLayoutLanding from './ReviewLayoutLanding/ReviewLayoutLanding';
import * as action from './../../../../store/actions/index';

class ReviewMainPage extends Component {
    state = {
        pageItem: null
    };

    componentDidMount() {
        this.props.getReviews();
    }

    setPageItem = () => {
        let pageItemRec = this.props.reviews.find(item => {
            return item.url === this.props.history.location.pathname;
        });

        this.setState({ pageItem: pageItemRec });
    };

    onChange = item => {
        this.setState({ pageItem: item });
    };

    render() {
        let pageContent = null;

        if (this.props.reviews && this.state.pageItem === null) {
            this.setPageItem();
        }

        if (this.state.pageItem) {
            pageContent = (
                <ReviewLayoutLanding
                    propToSend={this.state.pageItem}
                    callMe={item => this.onChange(item)}
                />
            );
        }

        return <div>{pageContent}</div>;
    }
}

const mapStateToProps = state => {
    return {
        reviews: state.reviewStore.reviews
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getReviews: () => dispatch(action.getReviews())
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ReviewMainPage);
