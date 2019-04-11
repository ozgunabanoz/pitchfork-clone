import axios from 'axios';

import * as actionTypes from './actionTypes';

export const getFeatures = () => {
    return async dispatch => {
        try {
            let resData = await axios.get('/api/features');

            dispatch(fetchFeatures(resData.data));
        } catch (e) {
            console.log(e);
        }
    };
};

export const fetchFeatures = features => {
    return {
        type: actionTypes.FETCH_FEATURES,
        features: features
    };
};

export const postFeatures = feature => {
    return async dispatch => {
        try {
            await axios.post('/api/features', feature);
            dispatch(getFeatures());
        } catch (e) {
            console.log(e);
        }
    };
};

export const clickFeatures = feature => {
    return {
        type: actionTypes.CLICK_FEATURES,
        clickedFeature: feature
    };
};

export const deleteFeatures = feature => {
    return async dispatch => {
        try {
            await axios.delete('/api/features', { data: feature });
            dispatch(getFeatures());
        } catch (e) {
            console.log(e);
        }
    };
};

export const updateFeatures = feature => {
    return async dispatch => {
        try {
            let returnedData = await axios.patch('/api/features', feature);

            dispatch(clickFeatures(returnedData.data));
        } catch (e) {
            console.log(e);
        }
    };
};
