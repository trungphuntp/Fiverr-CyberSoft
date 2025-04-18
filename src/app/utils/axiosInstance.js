import axios from "axios";
import { STORAGE } from "../constants/storage";
import { token } from "../constants/tokens";

import environment from "./enviroments";
import { methodToken } from "./Token";

const axiosInstance = axios.create({
  baseURL: environment.baseUrl,
});

axiosInstance.interceptors.request.use(
  (config) => {
    const cyberToken = token;
    const userToken = methodToken.get(STORAGE.token);
    if (cyberToken) {
      config.headers.tokencybersoft = cyberToken;
    }
    if (userToken) {
      config.headers.token = userToken;
    }
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
