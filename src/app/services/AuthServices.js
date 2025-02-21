import axiosInstance from "../utils/axiosInstance";

const AuthServices = {
    login: (payload = {}) => {
        return axiosInstance.post(`/auth/signin`, payload);
    },
    register: (payload = {}) => {
        return axiosInstance.post(`/auth/signup`, payload);
    },
   
};

export default AuthServices;
