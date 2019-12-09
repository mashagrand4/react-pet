import { FETCH_VIDEO, UPDATE_SEARCH_QUERY } from '../constants/search';
import {youtube, params} from '../apis/youtube';

export const updateSearchQuery = (value) => {
    return {
        type: UPDATE_SEARCH_QUERY,
        payload: {
            value
        }
    }
}

export const fetchVideo = ({list, nextPageToken}) => {
    return {
        type: FETCH_VIDEO,
        payload: {
            list,
            nextPageToken
        }
    }
}

export const asyncFetchVideo = ({value, list, nextPageToken}) => {
    console.log(list);
    return (dispatch) => {
        youtube.get('/search', {
            params: {
                ...params,
                q: value,
                pageToken: nextPageToken,
            }
        }).then((response, error) => {
            dispatch(fetchVideo({
                    value: value,
                    list: list.concat(response.data.items),
                    nextPageToken: response.data.nextPageToken,
                }
            ))
        });
    }
}