import axios from "axios";

export const BASE_URL = "";

const AxiosInstance = axios.create({
    baseURL: BASE_URL,
    timeout: 1000000,
    headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
        // Authorization: `Bearer ${sessionStorage.getItem("token")}`
    },
})

const AxiosInstanceFormData = axios.create({
    baseURL: BASE_URL,
    timeout: 1000000,
    headers: {
        "Content-Type": "multipart/form-data",
         Authorization: `Bearer ${sessionStorage.getItem("token")}`
    },
})

export { AxiosInstance };

export { AxiosInstanceFormData };