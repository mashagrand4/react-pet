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

// export const asyncFetchVideo = ({value, list, nextPageToken}) => {
//     return (dispatch) => {
//         youtube.get('/search', {
//             params: {
//                 ...params,
//                 q: value,
//                 pageToken: nextPageToken,
//             }
//         }).then((response, error) => {
//             dispatch(fetchVideo({
//                     value: value,
//                     list: list.concat(response.data.items),
//                     nextPageToken: response.data.nextPageToken,
//                 }
//             ))
//         });
//     }
// };