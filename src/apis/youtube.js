import axios from 'axios';
const APIKEY = 'AIzaSyBuLAVkPg9jKirjQ9IbHme3wz1vv23pp9s';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
});