import { FETCH_VIDEO } from '../constants/videos';

export default value => {
    return {
        type: FETCH_VIDEO,
        payload: {
            value,
        }
    }
}