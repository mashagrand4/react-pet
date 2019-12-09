import { FETCH_VIDEO, UPDATE_SEARCH_QUERY } from '../constants/search';

export const updateSearchQuery = (value) => {
    return {
        type: UPDATE_SEARCH_QUERY,
        payload: {
            value
        }
    }
};

export const fetchItems = (state) => {
    return {
        type: FETCH_VIDEO,
        payload: {
            ...state
        }
    }
};