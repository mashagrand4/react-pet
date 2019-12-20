import { call, put, takeLatest } from 'redux-saga/effects';
import YoutubeApi from '../apis/youtube';
import {loadVideo, updateList} from '../actions/search';
import {FETCH_MORE_VIDEO, FETCH_VIDEO} from '../constants/actionTypes';
import {VIDEO} from '../constants/resultTypes';

function* fetchHelper(payload) {
  const { items, nextPageToken } = yield call(YoutubeApi.searchVideo, payload);
  const ids = items.filter(item => item.kind === VIDEO).map(item => {
    return item.id;
  });
  const itemsStatistics = yield call(YoutubeApi.fetchVideoRating, { ids });
  const itemsWithStatistics = items.map(item => ({
    ...itemsStatistics.find(itemStatistics => itemStatistics.id === item.id && itemStatistics),
    ...item,
  }));
  return {
    itemsWithStatistics,
    nextPageToken
  }
}

function* fetchMoreVideoAsync(action) {
  try {
    const { itemsWithStatistics, nextPageToken } = yield call(fetchHelper, action.payload);
    yield put(updateList(itemsWithStatistics, nextPageToken));
  } catch (e) {
    yield put(updateList([], ''));
  }
}

function* fetchVideoAsync(action) {
  try {
    const { itemsWithStatistics, nextPageToken } = yield call(fetchHelper, action.payload);
    yield put(loadVideo(itemsWithStatistics, nextPageToken));
  } catch (e) {
    yield put(updateList([], ''));
  }
}

function* sagas() {
  yield takeLatest(FETCH_VIDEO, fetchVideoAsync);
  yield takeLatest(FETCH_MORE_VIDEO, fetchMoreVideoAsync);
}

export default sagas;
