import axios from 'axios';

/* eslint-disable no-undef */
const API_URL = process.env.REACT_APP_PUBLIC_API_URL;
const API_KEY = process.env.REACT_APP_PUBLIC_API_KEY;

const REQUEST_TIMEOUT = 60000;

const token = window.localStorage.getItem('authToken')
const newUserToken = window.localStorage.getItem('newUserToken');

console.log(token,'token')

//const ff = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjJlNDY2NDI5LWZiNDktNDA3MC1hMDNlLWIyZWEyZjhiM2UyNiIsImlhdCI6MTY5Mjg5NjMxOCwiZXhwIjoxNjkyODk4MTE4fQ.VhNHEHVtusiGPiDppHQyxnpS7HRDdp6JzEQgL8c-1BM'

const headers = {
    'Content-Type': 'application/json',
    Accept: 'application/json',
    'x-api-key': API_KEY,
    Authorization: `Bearer ${token ? token : newUserToken}`
};

const instance = axios.create({
    baseURL: API_URL,
    headers
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
