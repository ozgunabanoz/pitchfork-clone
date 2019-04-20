import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import LayoutLanding from './LayoutLanding/LayoutLanding';

class LayoutTemplate extends Component {
    state = {
        pageItem: null,
        itemClass: null
    };

    componentDidMount = () => {
        try {
            let itemClass = this.props.history.location.pathname.split('/')[1];

            this.setState({ itemClass: itemClass });
        } catch (e) {}
    };

    setPageItem = () => {
        let pageItemRec = this.props[this.state.itemClass].find(item => {
            return item.url === this.props.history.location.pathname;
        });

        this.setState({ pageItem: pageItemRec });
    };

    onChange = item => {
        this.setState({ pageItem: item });
    };

    render() {
        let pageContent = null;

        if (
            this.state.itemClass &&
            this.props[this.state.itemClass] &&
            this.state.pageItem === null
        ) {
            this.setPageItem();
        }

        if (this.state.pageItem) {
            pageContent = (
                <LayoutLanding
                    propToSend={this.state.pageItem}
                    itemClass={this.state.itemClass}
                    redirectAddress={this.props.redirectAddress}
                    callMe={item => this.onChange(item)}
                />
            );
        }
        return <div>{pageContent}</div>;
    }
}

const mapStateToProps = state => {
    return {
        news: state.newsStore.news,
        features: state.featuresStore.features
    };
};

export default connect(mapStateToProps)(LayoutTemplate);
