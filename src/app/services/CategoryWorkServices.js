import axiosInstance from "../utils/axiosInstance";

const CategoryWorkServices = {
    getCategoryWorksById: (id = "") => {
        return axiosInstance.get(`/loai-cong-viec/${id}`);
    },
    getCategoryWorkSearch: (query = {}) => {
        return axiosInstance.get(`/loai-cong-viec/phan-trang-tim-kiem`, {
            params: query,
        });
    },
};

export default CategoryWorkServices;
