import axios from 'axios';
import { getAuth } from '../utils/authFunc';

/* eslint-disable no-undef */
const API_URL = process.env.REACT_APP_BASE_API_URL;
const API_KEY = process.env.REACT_APP_X_API_KEY;

const REQUEST_TIMEOUT = 60000;

const token = getAuth('token');

const headers = {
    'Content-Type': 'application/json',
    Accept: 'application/json',
    'x-api-key': API_KEY,
    Authorization: `Bearer ${token}`
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
