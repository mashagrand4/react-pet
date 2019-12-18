import { FETCH_VIDEO, UPDATE_SEARCH_QUERY, UPDATE_LIST, FETCH_MORE_VIDEO } from '../constants/actionTypes';

export const updateList = (list, nextPageToken) => {
  return {
    type: UPDATE_LIST,
    payload: {
      list,
      nextPageToken,
    },
  };
};

export const updateSearchQuery = value => {
  return {
    type: UPDATE_SEARCH_QUERY,
    payload: {
      value,
    },
  };
};

export const fetchMoreItems = (value, nextPageToken) => {
  return dispatch => {
    dispatch({
      type: FETCH_MORE_VIDEO,
      payload: {
        value,
        nextPageToken,
      },
    });
  };
};

export const fetchItems = (value, nextPageToken) => {
  return dispatch => {
    dispatch({
      type: FETCH_VIDEO,
      payload: {
        value,
        nextPageToken,
      },
    });
  };
};
