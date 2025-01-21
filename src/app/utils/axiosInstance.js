import axios from "axios";
import { token } from "../constants/tokens";
import { BASE_URL } from "./enviroments";

const axiosInstance = axios.create({
    baseURL: BASE_URL,
});
axiosInstance.interceptors.request.use(
    (config) => {
        config.headers.token = `${token}`;
        config.headers.tokencybersoft = `${token}`;
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

axiosInstance.interceptors.response.use(
    (res) => {
        // state code 200 - 299
        return res;
    },
    async (error) => {
        const originalConfig = error?.config;
        return Promise.reject(error);
    }
);

export default axiosInstance;
