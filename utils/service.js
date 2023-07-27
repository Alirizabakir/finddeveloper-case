import axios from 'axios';

const API = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
});

API.interceptors.request.use(
    (config) => {
        // config.headers['Authorization'] = 'Bearer token';
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

API.interceptors.response.use(
    (response) => {
        return response.data;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export default API;