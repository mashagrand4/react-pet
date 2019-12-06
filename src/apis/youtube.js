import axios from 'axios';

export const params = {
    part: 'snippet',
    maxResults: 12,
    key: 'AIzaSyBuLAVkPg9jKirjQ9IbHme3wz1vv23pp9s',
};

export const youtube = axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
});