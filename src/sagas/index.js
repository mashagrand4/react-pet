import {call, put, takeEvery} from 'redux-saga/effects';
import YoutubeApi from '../apis/youtube';
import {updateList} from "../actions/search";
import {FETCH_VIDEO} from '../constants/actionTypes';

function* fetchVideoAsync(action) {
    console.log('sagas', action);
    try {
        const {items, nextPageToken} = yield call(YoutubeApi.searchVideo, action.payload);
        let ids = items.filter((item) => item.kind === 'youtube#video');
        ids = ids.map((item) => {
            return item.id;
        });
        console.log(ids);
        const itemsStatistics = yield call(YoutubeApi.fetchVideoRating, {ids});
        console.log(itemsStatistics);
        const itemsWithStatistics = items.map(item => ({
            ...itemsStatistics.find((itemStatistics) => (itemStatistics.id === item.id) && itemStatistics),
            ...item
        }));
        console.log(itemsWithStatistics);
        yield put(updateList(itemsWithStatistics, nextPageToken));

    } catch(e) {
        yield put(updateList([], ''))
    }
}


function* sagas() {
    yield takeEvery(FETCH_VIDEO, fetchVideoAsync);
}

export default sagas;


