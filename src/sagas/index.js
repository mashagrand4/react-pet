import {call, put, takeEvery} from 'redux-saga/effects';
import {params, youtube} from '../apis/youtube';
import {fetchItems} from "../actions/search";
import {FETCH_VIDEO} from "../constants/actionTypes";

const fetchData = async({value, nextPageToken}) => {
    const result = await youtube.get('/search', {
        params: {
            ...params,
            q: value,
            pageToken: nextPageToken,
        },
    });
    return await result.data;
};

function* fetchVideoAsync(action) {
    console.log('sagas', action);
    try {
        const data = yield call(fetchData, action.payload);
        yield put({
            type: FETCH_VIDEO,
            payload: {
                ...action.payload,
                list: action.payload.list.concat(data.items),
                nextPageToken: data.pageToken
            }
        });
    } catch(e) {
        yield put({type: action.type, list: []})
    }
}

function* sagas() {
    yield takeEvery("FETCH_VIDEO_ASYNC", fetchVideoAsync);
}

export default sagas;


