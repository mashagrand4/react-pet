import { call, put, takeLatest } from 'redux-saga/effects';
import YoutubeApi from '../apis/youtube';
import { updateList } from '../actions/search';
import {FETCH_MORE_VIDEO, FETCH_VIDEO} from '../constants/actionTypes';

function* fetchMoreVideoAsync(action) {
  try {
    const { items, nextPageToken } = yield call(YoutubeApi.searchVideo, action.payload);
    let ids = items.filter(item => item.kind === 'youtube#video');
    ids = ids.map(item => {
      return item.id;
    });
    const itemsStatistics = yield call(YoutubeApi.fetchVideoRating, { ids });
    const itemsWithStatistics = items.map(item => ({
      ...itemsStatistics.find(itemStatistics => itemStatistics.id === item.id && itemStatistics),
      ...item,
    }));
    yield put(updateList(itemsWithStatistics, nextPageToken));
  } catch (e) {
    yield put(updateList([], ''));
  }
}

function* fetchVideoAsync(action) {
  try {
    const { items, nextPageToken } = yield call(YoutubeApi.loadVideo, action.payload);
    let ids = items.filter(item => item.kind === 'youtube#video');
    ids = ids.map(item => {
      return item.id;
    });
    const itemsStatistics = yield call(YoutubeApi.fetchVideoRating, { ids });
    const itemsWithStatistics = items.map(item => ({
      ...itemsStatistics.find(itemStatistics => itemStatistics.id === item.id && itemStatistics),
      ...item,
    }));
    yield put({type: 'ADD_VIDEO', payload: {list: itemsWithStatistics, nextPageToken}});
    // yield put(updateList(itemsWithStatistics, nextPageToken));
  } catch (e) {
    yield put(updateList([], ''));
  }
}

function* sagas() {
  yield takeLatest(FETCH_VIDEO, fetchVideoAsync);
  yield takeLatest(FETCH_MORE_VIDEO, fetchMoreVideoAsync);
}

export default sagas;
