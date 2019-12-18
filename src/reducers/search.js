import {FETCH_MORE_VIDEO, FETCH_VIDEO, UPDATE_LIST, UPDATE_SEARCH_QUERY} from '../constants/actionTypes';

const initialState = {
  list: [],
  value: '',
  nextPageToken: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_VIDEO:
      return {
        ...state,
      };
    case FETCH_MORE_VIDEO:
      console.log('fetch more video');
      return {
        ...state,
      };
    case 'ADD_VIDEO':
      console.log('ADD more video');
      console.log(action);
      return {
        ...state,
        list: action.payload.list,
        nextPageToken: action.payload.nextPageToken,
      };
    case UPDATE_LIST:
      return {
        ...state,
        list: state.list.concat(action.payload.list),
      };
    case UPDATE_SEARCH_QUERY:
      return {
        ...state,
        value: action.payload.value,
      };
    default:
      return state;
  }
};
