import axios from 'axios'
import { useRouter } from "vue-router";
import store from '@/store/auth.js'
const axiosInstance = axios.create({
    baseURL: 'http://localhost:3000/api',
    timeout: 5000
})

axiosInstance.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('token');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }

);
axiosInstance.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        const router = useRouter();
        console.log(error.response);
        if (error.response && error.response.status === 401) {
            store.commit('logout');
            localStorage.removeItem('token');
            router.push({ name: 'Login' });
        }
        return Promise.reject(error);
    }
);

export default  axiosInstance;