import { LOCAL_TOKEN_KEY } from '@store/auth/authStore';

import axios from 'axios';

type ServerMode = {
    prod: string;
    dev: string;
};

const URL: ServerMode = {
    prod: '',
    dev: 'https://engineers-itmo.ru',
};

// export const BASE_URL = process.env.REACT_APP_URL || ''
export const BASE_URL = URL.dev

export const http = axios.create({
    baseURL: BASE_URL,
    withCredentials: false
});

http.interceptors.request.use(async (config) => {
    try {
        const token = localStorage.getItem(LOCAL_TOKEN_KEY);
        if (token) {
            config.headers!.Authorization = 'JWT ' + token;
        }
    } catch (e) {
        console.log('DB GET TOKEN: ', e);
    }
    return config;
});


http.interceptors.response.use(function (response) {
    return response;
}, function (error) {
    switch (error.response.status) {
        case 401:
            handelUnauthorizedStatus()
    }
    return Promise.reject(error);
});

const handelUnauthorizedStatus = () => {
    localStorage.removeItem(LOCAL_TOKEN_KEY);
    window.location.href = '/login'
}

