import axios from 'axios';

/* eslint-disable no-undef */
const API_URL = process.env.REACT_APP_PUBLIC_API_URL;
const API_KEY = process.env.REACT_APP_PUBLIC_API_KEY;

const REQUEST_TIMEOUT = 60000;

const headers = {
    'Content-Type': 'application/json',
    Accept: 'application/json',
    'x-api-key': API_KEY,
};

const instance = axios.create({
    baseURL: API_URL,
    headers
});

instance.interceptors.request.use(
    (request) => {
        const token = localStorage.getItem("authToken");
        const newUserToken = localStorage.getItem('newUserToken');
        if (!!token) {
            request.headers.Authorization = `Bearer ${token ? token : newUserToken}`;
        }
        return request;
    },
    (error) => Promise.reject(error)
);

instance.interceptors.response.use(undefined, (error) => {
    if (
        error?.response?.status === 401 ||
        error?.response?.data?.message?.includes('InvalidToken')
    ) {
        localStorage.clear()
    }
    return Promise.reject(error);
});

instance.defaults.timeout = REQUEST_TIMEOUT;

export const makeApiRequest = async (method, url, data) => {
    const response = await instance.request({
        method,
        url,
        data
    });
    return response;
};