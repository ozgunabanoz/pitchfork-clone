import React from 'react';
import _ from 'lodash';

import Card from './../Card/Card';

const generateUrl = (title, prefix) => {
    let urlGen = prefix + title;
    urlGen = urlGen.replace(/ /g, '-');

    return urlGen;
};

const renderRestRows = (item, scrAttr) => {
    let restFeatureCols = rowInitiator({
        items: item.slice(scrAttr.thirdRowSliceNum),
        props: scrAttr.props,
        colAttr: scrAttr.restColAttr,
        fRowFlag: false,
        rDetFlag: false
    });
    let restFeatureRows = [];

    for (
        let i = 0;
        i < Math.ceil(restFeatureCols.length / scrAttr.restRowColNum);
        i++
    ) {
        let columns = [];

        for (let j = 0; j < restFeatureCols.length; j++) {
            if (Math.floor(j / scrAttr.restRowColNum) === i) {
                columns.push(restFeatureCols[j]);
            }
        }

        restFeatureRows.push(
            <div key={i} className="row">
                {columns}
            </div>
        );
    }
    return restFeatureRows;
};

const rowInitiator = props => {
    return _.map(props.items, item => {
        let genUrl = generateUrl(item.title, props.props.prefix);
        return (
            <div className={props.rDetFlag ? 'row' : ''}>
                <div className={props.colAttr}>
                    <Card
                        genUrlProp={genUrl}
                        itemProp={item}
                        cardClass={props.props.cardClass}
                        fRowProp={props.fRowFlag}
                    />
                </div>
            </div>
        );
    });
};

const rowGenerator = props => {
    let cards = null;

    if (props.itemClassFlag) {
        cards = renderRestRows(props.item, props.scrAttr);
    } else {
        cards = rowInitiator(props);
    }

    return <div>{cards}</div>;
};

export default rowGenerator;
