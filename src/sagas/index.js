import {call, put, takeEvery} from 'redux-saga/effects';
import YoutubeApi from '../apis/youtube';
import {updateList} from "../actions/search";
import {FETCH_VIDEO} from '../constants/actionTypes';

// function* getRatingAsync(action) {
//     console.log('sagas', action);
//     try {
//         debugger;
//         console.log(YoutubeApi.searchVideo);
//         const {items, nextPageToken} = yield call(YoutubeApi.searchVideo, action.payload);
//         const result = yield call(YoutubeApi.fetchRating, action.payload);
//         console.log(items, nextPageToken);
//         yield put(updateList(items, nextPageToken));
//
//     } catch(e) {
//         yield put(updateList([], ''))
//     }
// }

function* fetchVideoAsync(action) {
    console.log('sagas', action);
    try {
        console.log(YoutubeApi.searchVideo);
        const {items, nextPageToken} = yield call(YoutubeApi.searchVideo, action.payload);
        console.log(items);
        const ids = items.map((item) => {
            return item.id;
        });
        const itemsStatistics = yield call(YoutubeApi.fetchVideoRating, {ids});
        const itemsWithStatistics = items.map((item, index) => {
            if (item.id === itemsStatistics[index].id){
                return {
                    ...item,
                    ...itemsStatistics[index]
                };
            }
        });
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


