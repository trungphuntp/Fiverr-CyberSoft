import axios from "axios";
import { STORAGE } from "../constants/storage";
import { token } from "../constants/tokens";

import BASE_URL from "./enviroments";
import { methodToken } from "./Token";
import environment from "./enviroments";

const axiosInstance = axios.create({
    baseURL: environment.baseUrl,
});

axiosInstance.interceptors.request.use(
    (config) => {
        config.headers.tokencybersoft = `${token}`;
        config.headers.token = `${methodToken.get(STORAGE.token)}`;
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
