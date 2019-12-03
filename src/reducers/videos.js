import {FETCH_VIDEO} from "../constants/videos";

const initialState = {
    list: [],
    value: '',
};

export default (state = initialState, action) => {
    switch (action.type) {
        case FETCH_VIDEO:
            return {
                ...state,
                value: action.payload.value
            };
        default:
            return state;
    }
}

