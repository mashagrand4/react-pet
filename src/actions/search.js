import { FETCH_VIDEO, UPDATE_SEARCH_QUERY, UPDATE_LIST } from '../constants/actionTypes';

export const updateList = (list, nextPageToken) => {
    console.log('action update', list);
    return {
        type: UPDATE_LIST,
        payload: {
            list,
            nextPageToken
        }
    }
};

export const updateSearchQuery = (value) => {
    //console.log('action query');
    return {
        type: UPDATE_SEARCH_QUERY,
        payload: {
            value
        }
    }
};

export const fetchItems = (value, nextPageToken) => {
    console.log('action fetch', value, nextPageToken);
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