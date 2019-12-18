import {FETCH_VIDEO, FETCH_RATING, UPDATE_LIST, UPDATE_SEARCH_QUERY, UPDATE_RATING} from "../constants/actionTypes";

const initialState = {
    list: [],
    value: '',
    nextPageToken: null,
};

export default (state = initialState, action) => {
    switch (action.type) {
        case FETCH_VIDEO:
            console.log('reducer fetch', action);
            return {
                ...state,
            };
        case UPDATE_LIST:
            console.log('reducer update', action);
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
        case FETCH_RATING:
            return {
                ...state,
                idsList: action.payload.idsList
            };
        case UPDATE_RATING:
            return {
                ...state,
                idsList: action.payload.idsList
            };
        default:
            return state;
    }
}

