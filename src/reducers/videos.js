import {SEARCH_VIDEOS} from "../constants/videos";

const initialState = {
    videos: [],
};

export default (state = initialState, action) => {
    if (action.type === SEARCH_VIDEOS) {
        console.log(action);
    }

    return state;
}

