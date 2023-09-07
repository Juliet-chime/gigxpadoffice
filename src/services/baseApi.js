import axios from 'axios';

/* eslint-disable no-undef */
const API_URL = process.env.REACT_APP_PUBLIC_API_URL;
const API_KEY = process.env.REACT_APP_PUBLIC_API_KEY;

let instance;

async function setAuthorization(headers) {

    const token = await localStorage.getItem('authToken')
    const newUserToken = await localStorage.getItem('newUserToken');

    if (!!newUserToken) {
        headers.Authorization = `Bearer ${newUserToken}`
    }
    else if (!!token) {
        headers.Authorization = `Bearer ${token}`
    }

    return headers

}

async function instantiateInstance() {

    let headers = {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        'x-api-key': API_KEY,
    };

    headers = await setAuthorization(headers)

    if (!!instance) {

        instance.defaults.headers.common['Authorization'] = headers.Authorization

    } else {
        instance = axios.create({
            baseURL: API_URL,
            headers
        });
    }

    return instance
}

export const makeApiRequest = async (method, url, data, params) => {
    await instantiateInstance()

    const buildParams = (data) => {
        const param = new window.URLSearchParams()

        for (let [key, value] of Object.entries(data)) {
            if (Array.isArray(value)) {
                value.forEach((item, index) => {
                    param.append(`${key}${index}`, item)
                });
            } else {
                param.append(key, value)
            }
        }

        return param;
    }

    if (params) {
        params=buildParams(params)
    }

    const res = await instance.request({
    method,
    url,
    data,
    params,
    })
    return res
    // .catch(async error => {
    //     console.log(error)
    //     // if (error?.response) {
    //     //     if(+error?.response?.status === 401){
    //     //          await localStorage.setItem('authToken', "")
    //     //          window?.location?.reload()
    //     //     }
    //     // } 
    // })
};


