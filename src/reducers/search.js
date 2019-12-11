import {FETCH_VIDEO, UPDATE_LIST, UPDATE_SEARCH_QUERY} from "../constants/actionTypes";

const initialState = {
    list: [],
    value: '',
    nextPageToken: null,
};

export default (state = initialState, action) => {
    switch (action.type) {
        case FETCH_VIDEO:
            console.log('reducer', action);
            return {
                ...state,
            };
        case UPDATE_LIST:
            return {
                ...state,
                list: state.list.concat(action.payload.list),
                nextPageToken: action.payload.nextPageToken
            };
        case UPDATE_SEARCH_QUERY:
            return {
                ...state,
                value: action.payload.value
            };
        default:
            return state;
    }
}

