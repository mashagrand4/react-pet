import {FETCH_VIDEO, UPDATE_SEARCH_QUERY} from "../constants/search";

const initialState = {
    list: [],
    value: '',
    nextPageToken: null,
};

export default (state = initialState, action) => {
    console.log(action);
    switch (action.type) {
        case FETCH_VIDEO:
            return {
                ...state,
                value: action.payload.value,
                list: action.payload.list,
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

