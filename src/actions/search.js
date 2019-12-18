import {FETCH_VIDEO, UPDATE_SEARCH_QUERY, UPDATE_LIST, FETCH_RATING, UPDATE_RATING} from '../constants/actionTypes';

export const updateList = (list, nextPageToken) => {
    return {
        type: UPDATE_LIST,
        payload: {
            list,
            nextPageToken
        }
    }
};

export const updateRating = (idsList) => {
    return {
        type: UPDATE_RATING,
        payload: {
            idsList
        }
    }
};

export const updateSearchQuery = value => {
    return {
        type: UPDATE_SEARCH_QUERY,
        payload: {
            value
        }
    }
};

export const fetchItems = (value, nextPageToken) => {
    return (dispatch) => {
        dispatch({
            type: FETCH_VIDEO,
            payload: {
                value,
                nextPageToken
            }
        });
    };
};

export const fetchRating = (list) => {
    return (dispatch) => {
        dispatch({
            type: FETCH_RATING,
            payload: {
                list,
            }
        });
    };
};