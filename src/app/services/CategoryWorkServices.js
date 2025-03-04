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
    postCategoryWork: (payload = {}) => {
        return axiosInstance.post(`/loai-cong-viec`, payload);
    },
    putCategoryWork: (id = "", payload = {}) => {
        return axiosInstance.put(`/loai-cong-viec/${id}`, payload);
    },
    deleteCategoryWork: (id = "") => {
        return axiosInstance.delete(`/loai-cong-viec/${id}`);
    },
};

export default CategoryWorkServices;
