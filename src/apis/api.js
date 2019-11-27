import axios from 'axios';
const APIKEY = 'AIzaSyAOV0Xr7thCah-N6venWFnHFc6BYzNWEE0';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: APIKEY,
    },
});