import axios from 'axios';

const request = axios.create({
    baseURL: 'https://swapi.dev/api',
    timeout: 1000,
});

export default request;


