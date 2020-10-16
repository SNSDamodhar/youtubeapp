import axios from 'axios';


const KEY = 'AIzaSyDiGXPQ6xxVObu9ITiJ2Odi0burO4UWNv8';

export default axios.create ({
    baseURL : 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
});