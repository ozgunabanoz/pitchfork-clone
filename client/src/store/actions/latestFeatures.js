import axios from 'axios';

import * as actionTypes from './actionTypes';

export const getLatestFeatures = () => {
    return async dispatch => {
        try {
            let resData = await axios.get('/api/latest_features');

            dispatch(fetchData(resData.data));
        } catch (e) {
            console.log(e);
        }
    };
};

export const fetchData = features => {
    return {
        type: actionTypes.FETCH_LFEATURES,
        lFeatures: features
    };
};
