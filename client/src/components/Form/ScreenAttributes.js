const screenAttributes = {
    news: {
        props: { prefix: '/news/item/', cardClass: 'news' },
        firstRowColAttr: 'col s12',
        secRowSliceNum: 5,
        secRowColAttr: 'col s3',
        thirdRowSliceNum: 0,
        thirdRowColAttr: 'col s8',
        mobColAttr: 'col s12',
        itemClassFlag: false
    },
    features: {
        props: { prefix: '/features/item/', cardClass: 'feature' },
        firstRowColAttr: 'col s12',
        secRowSliceNum: 4,
        secRowColAttr: 'col s4',
        thirdRowSliceNum: 10,
        thirdRowColAttr: 'col s8',
        restRowColNum: 4,
        restColAttr: 'col s3',
        mobColAttr: 'col s12',
        itemClassFlag: true
    }
};

export default screenAttributes;
