import axiosInstance from "../utils/axiosInstance";

const UserServices = {
    getUserById: (id = "") => {
        return axiosInstance.get(`/users/${id}`);
    },
};

export default UserServices;
