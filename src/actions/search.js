import { FETCH_VIDEO, UPDATE_SEARCH_QUERY } from '../constants/search';

export function updateSearchQuery(value) {
    return {
        type: UPDATE_SEARCH_QUERY,
        payload: {
            value,
        }
    }
}

export function fetchVideo(value) {
    return {
        type: FETCH_VIDEO,
        payload: {
            value,
        }
    }
}