import axios from "axios";
import { logout } from "../shared/hooks";

const apiClient = axios.create({
    baseURL: 'http://127.0.0.1:4000/quetzalito/v1',
    timeout: 5000
})

apiClient.interceptors.request.use(
    (config) => {
        const userDetails = localStorage.getItem('user')

        if (userDetails) {
            const token = JSON.parse(userDetails).token
            config.headers.Authorization = `Bearer ${token}`
        }
        return config
    },
    (e) => {
        return Promise.reject(e)
    }
)


/* -----------------USUARIOS--------------------------*/
export const login = async (data) => {
    try {
        return await apiClient.post('/auth/login', data)
    } catch (e) {
        return {
            error: true,
            e
        }
    }
}

export const register = async (data) => {
    try {
        return await apiClient.post('/auth/register', data)
    } catch (e) {
        return {
            error: true,
            e
        }
    }
}

export const getUserEmail = async (email) => {
    try {
        console.log(email, email)
        return await apiClient.get(`/user/email/${email}`)
    } catch (e) {
        return {
            error: true,
            e

        }
    }
}

const checkResponseStatus = (e) => {
    const responseStatus = e?.response?.status

    if (responseStatus) {
        (responseStatus === 401 || responseStatus === 403) && logout
    }
}

export const getTransfer = async (emisorId) => {
    try {
        console.log('api',emisorId)
        return await apiClient.get(`/transfer/?emisorId=${emisorId}`)
        return response.data;
    } catch (e) {
        return {
            error: true,
            e
        }
    }
}

export const postCredit = async (data) =>{
    try {
        return await apiClient.post('/credit/requestCredit', data)
    } catch (e) {
        return {
            error: true,
            e
        }
    }
}

export const getCredit = async () =>{
    try {
        return await apiClient.get('/credit/pending')
    } catch (e) {
        error: true,
        e
    }
}

export const getCreditAccepted = async () =>{
    try {
        return await apiClient.get('/credit/accepted')
    } catch (e) {
        error: true,
        e
    }
}

export const getCreditDenied = async () =>{
    try {
        return await apiClient.get('/credit/denied')
    } catch (e) {
        error: true,
        e
    }
}

export const postAuthentication = async (data) =>{
    try {
        return await apiClient.post('/credit/authorize', data)
    } catch (e) {
        return {
            error: true,
            e
        }
    }
}