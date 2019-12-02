import { SEARCH_VIDEOS } from '../constants/videos';

export function searchVideos(text) {
    return {
        type: SEARCH_VIDEOS,
        payload: {
            text,
        }
    }
}