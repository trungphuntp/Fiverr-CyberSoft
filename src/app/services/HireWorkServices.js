import axiosInstance from "../utils/axiosInstance";

const HireWorkServices = {
    getHireWorkAll: () => {
        return axiosInstance.get(`/thue-cong-viec`);
    },
    getHireWorkById: (id = " ") => {
        return axiosInstance.get(`/thue-cong-viec/${id}`);
    },
    deleteHireWorkById: (id = " ") => {
        return axiosInstance.delete(`/thue-cong-viec/${id}`);
    },
    postHireWork: (payload = {}) => {
        return axiosInstance.post(`/thue-cong-viec`, payload);
    },
    getMyHiredWork: () => {
        return axiosInstance.get(`thue-cong-viec/lay-danh-sach-da-thue`);
    },
};

export default HireWorkServices;
