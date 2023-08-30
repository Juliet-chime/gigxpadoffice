import axios from 'axios';

const API_URL = process.env.REACT_APP_PUBLIC_API_URL;
const API_KEY = process.env.REACT_APP_PUBLIC_API_KEY;
let instance

async function setAuthorization (headers) {

    const token = await localStorage.getItem('authToken')
    const newUserToken = await localStorage.getItem('newUserToken');
    
        if(!!newUserToken){
            headers.Authorization = `Bearer ${newUserToken}`
        }
        else if(!!token){
            headers.Authorization = `Bearer ${token}`
        }
    
        return headers
        
    }

async function instantiateInstance () {

let headers = {
    'Content-Type': 'application/json',
    Accept: 'application/json',
    'x-api-key': API_KEY,
};

headers = await setAuthorization(headers)

console.log(headers)

if(!!instance){
    
instance.defaults.headers.common['Authorization'] = headers.Authorization

} else{
    instance = axios.create({
        baseURL: API_URL,
        headers
    });
}


return instance
}

export const makeApiRequest = async (method, url, data) => {
    await instantiateInstance()

    return instance.request({
        method,
        url,
        data
    })
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
