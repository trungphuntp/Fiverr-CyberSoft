import axiosInstance from "../utils/axiosInstance";

const HireWorkServices = {
    getHireWorkAll: () => {
        return axiosInstance.get(`/thue-cong-viec`);
    },
    getHireWorkById: (id = " ") => {
        return axiosInstance.get(`/thue-cong-viec/${id}`);
    },
    postHireWork: (payload = {}) => {
        return axiosInstance.post(`/thue-cong-viec`, payload);
    },
};

export default HireWorkServices;
