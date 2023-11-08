import axios from 'axios';

const apiClient = axios.create({
    headers: {
        "Content-Type": 'application/json'
    },
    // baseURL: process.env.REACT_APP_SERVER_HOST
    baseURL: 'https://'
});

const { get, post, put, patch, delete: destroy } = apiClient;
export { get, post, put, patch, destroy };