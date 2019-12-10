import { FETCH_VIDEO, UPDATE_SEARCH_QUERY } from '../constants/actionTypes';

export const updateSearchQuery = (value) => {
    console.log('action querry');
    return (dispatch) => {
        dispatch({
            type: UPDATE_SEARCH_QUERY,
            payload: {
                value
            }
        });
    }
};

export const fetchItems = (state) => {
    console.log('action fetch');
    return (dispatch) => {
        dispatch({
            type: 'FETCH_VIDEO_ASYNC',
            payload: {
                ...state
            }
        });
    };
};