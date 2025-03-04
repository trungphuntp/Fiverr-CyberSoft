import axiosInstance from "../utils/axiosInstance";

const UserServices = {
    getUserAll: () => {
        return axiosInstance.get(`/users`);
    },
    getUserById: (id = "") => {
        return axiosInstance.get(`/users/${id}`);
    },

    deleteUserById: (id = "") => {
        return axiosInstance.delete(`/users?id=${id}`);
    },

    postUser: (payload = {}) => {
        return axiosInstance.post(`/users`, payload);
    },
    putUserById: (id = "", payload = {}) => {
        return axiosInstance.put(`/users/${id}`, payload);
    },
    getUserSearch: (query = {}) => {
        return axiosInstance.get(`/users/phan-trang-tim-kiem`, {
            params: query,
        });
    },
};

export default UserServices;
