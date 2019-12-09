import {call, put, takeEvery} from 'redux-saga/effects';
import {params, youtube} from '../apis/youtube';
import {fetchItems} from "../actions/search";

const fetchData = async({value, nextPageToken}) => {
    const result = await youtube.get('/search', {
        params: {
            ...params,
            q: value,
            pageToken: nextPageToken,
        },
    });
    return await result.data.items;
};

function* fetchVideoAsync(action) {
    console.log('sagas', action);
    try {
        const videos = yield call(fetchData, action.payload);
        // });.then((response, error) => {
        //     dispatch(fetchVideo({
        //             value: value,
        //             list: list.concat(response.data.items),
        //             nextPageToken: response.data.nextPageToken,
        //         }
        //     ))
        // }));
        yield put(fetchItems({
            ...action.payload,
            list: videos.items,
        }));
    } catch(e) {
        yield put({type: action.type, list: []})
    }
}

function* sagas() {
    yield takeEvery("FETCH_VIDEO", fetchVideoAsync);
}

export default sagas;


