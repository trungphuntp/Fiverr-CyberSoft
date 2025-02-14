import axiosInstance from "../utils/axiosInstance";

const UserServices = {
    getUserById: (id = "") => {
        return axiosInstance.get(`/users/${id}`);
    },
    putUserById: (id = "", payload = {}) => {
        return axiosInstance.put(`/users/${id}`, payload);
    },
};

export default UserServices;
