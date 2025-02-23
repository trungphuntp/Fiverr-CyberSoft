import axiosInstance from "../utils/axiosInstance";

const UserServices = {
    getUserById: (id = "") => {
        return axiosInstance.get(`/users/${id}`);
    },
    putUserById: (id = "", payload = {}) => {
        return axiosInstance.put(`/users/${id}`, payload);
    },
    uploadAvatar: (payload = {}) => {
        return axiosInstance.post(
            `/users/upload-avatar`,
            { formFile: payload },
            {
                headers: { "Content-Type": "multipart/form-data" },
            }
        );
    },
};

export default UserServices;
