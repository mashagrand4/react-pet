import axios from 'axios';

export const params = {
    part: 'snippet',
    maxResults: 12,
    key: 'AIzaSyD8a-SC61GaTYfoWeq59uyeQRosGubgKHg',
};

export const youtube = axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
});