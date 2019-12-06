import { FETCH_VIDEO, UPDATE_SEARCH_QUERY } from '../constants/search';
import {youtube, params} from '../apis/youtube';

export function updateSearchQuery(value) {
    return {
        type: UPDATE_SEARCH_QUERY,
        payload: {
            value
        }
    }
}

export function fetchVideo({list, nextPageToken}) {
    return {
        type: FETCH_VIDEO,
        payload: {
            list,
            nextPageToken
        }
    }
}

export function asyncFetchVideo(value) {
    return function (dispatch) {
        youtube.get('/search', {
            params: {
                ...params,
                q: value,
            }
        }).then((response, error) => {
            dispatch(fetchVideo({
                    value: value,
                    list: response.data.items,
                    nextPageToken: response.data.nextPageToken,
                }
            ))
        });
    }
}