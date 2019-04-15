import React from 'react';
import _ from 'lodash';

import ReviewCard from './ReviewCard/ReviewCard';

const genUrl = (item, prefix) => {
    let url = prefix + item.albumArtist + '/' + item.albumTitle;
    url = url.replace(/ /g, '-');

    return url;
};

const renderColumns = (items, prefix, colAttr) => {
    return _.map(items, item => {
        let url = genUrl(item, prefix);

        return (
            <div key={item.albumTitle} className={colAttr}>
                <ReviewCard review={item} url={url} />
            </div>
        );
    });
};

const renderReviews = props => {
    let reviewCols = renderColumns(
        props.items,
        props.prefix,
        props.scrAttr.colAttr
    );
    let reviewRows = [];

    for (
        let i = 0;
        i < Math.ceil(reviewCols.length / props.scrAttr.colNum);
        i++
    ) {
        let columns = [];

        for (let j = 0; j < reviewCols.length; j++) {
            if (Math.floor(j / props.scrAttr.colNum) === i) {
                columns.push(reviewCols[j]);
            }
        }

        reviewRows.push(
            <div key={i} className="row">
                {columns}
            </div>
        );
    }
    return reviewRows;
};

const rowGenerator = props => {
    let rows = renderReviews(props);

    return <div>{rows}</div>;
};

export default rowGenerator;
