import axios from "axios";
import { logout } from "../shared/hooks";

const apiClient = axios.create({
    baseURL: 'http://localhost:4000/quetzalito/v1',
    timeout: 5000
});

/* apiClient.interceptors.request.use(
    (config) => {
        const userDetails = localStorage.getItem('user');
        if (userDetails) {
            const token = JSON.parse(userDetails).token;
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (e) => {
        return Promise.reject(e);
    }
); */

const checkResponseStatus = (e) => {
    const responseStatus = e?.response?.status;
    if (responseStatus) {
        (responseStatus === 401 || responseStatus === 403) && logout();
    }
};

export const login = async (data) => {
    try {
        return await apiClient.post('/auth/login', data);
    } catch (e) {
        return {
            error: true,
            e
        };
    }
};

export const register = async (data) => {
    try {
        return await apiClient.post('/auth/register', data);
    } catch (e) {
        return {
            error: true,
            e
        };
    }
};

export const getUserEmail = async (email) => {
    try {
        console.log(email, email);
        return await apiClient.get(`/user/email/${email}`);
    } catch (e) {
        return {
            error: true,
            e
        };
    }
};

export const getUserIdByAccount = async (accountNumber) => {
    try {
        const response = await apiClient.get(`/user/account/${accountNumber}`);
        return response.data.userId;
    } catch (e) {
        checkResponseStatus(e);
        throw e;  
    }
};

export const createTransfer = async (data) => {
    try {
        const response = await apiClient.post('/transfer/addTransfer', data);
        return response.data;
    } catch (e) {
        checkResponseStatus(e);
        throw e; 
    }
};

export const getTransfersByUser = async (userId) => {
    try {
        const response = await apiClient.get(`/transfer/user/${userId}`);
        return response.data;
    } catch (e) {
        checkResponseStatus(e);
        console.error('Error fetching transfers', e);
        throw e;
    }
};

export default apiClient;