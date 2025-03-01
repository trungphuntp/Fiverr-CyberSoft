import axiosInstance from "../utils/axiosInstance";

const DetailCategoryWorkServices = {
    getDetailCategoryWorksById: (id = "") => {
        return axiosInstance.get(`/chi-tiet-loai-cong-viec/${id}`);
    },
    getDetailCategoryWorksSearch: (query = {}) => {
        return axiosInstance.get(`/chi-tiet-loai-cong-viec/phan-trang-tim-kiem`, {
            params: query,
        });
    },
};

export default DetailCategoryWorkServices;
