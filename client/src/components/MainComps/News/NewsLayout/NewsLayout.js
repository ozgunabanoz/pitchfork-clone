import React, { Component } from 'react';

import LayoutTemplate from './../../../UI/PageLayout/LayoutTemplate';

class NewsLayout extends Component {
    render() {
        return (
            <LayoutTemplate
                clickedItem="clickedNews"
                itemClass="news"
                redirectAddress="/news"
            />
        );
    }
}

export default NewsLayout;
