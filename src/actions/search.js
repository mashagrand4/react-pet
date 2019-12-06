import { FETCH_VIDEO, UPDATE_SEARCH_QUERY } from '../constants/search';
import youtube from '../apis/youtube';

export function updateSearchQuery(value) {
    return {
        type: UPDATE_SEARCH_QUERY,
        payload: {
            value
        }
    }
}

export function fetchVideo({value, list, nextPageToken}) {
    return {
        type: FETCH_VIDEO,
        payload: {
            value,
            list,
            nextPageToken
        }
    }
}

export function asyncFetchVideo(value) {
    return function (dispatch) {
        youtube.get('/search', {
            params: {
                part: 'snippet',
                maxResults: 12,
                key: 'AIzaSyBuLAVkPg9jKirjQ9IbHme3wz1vv23pp9s',
                q: value
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