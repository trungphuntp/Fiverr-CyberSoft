import axiosInstance from "../utils/axiosInstance";

const DetailCategoryWorkServices = {
    getDetailCategoryWorksById: (id = "") => {
        return axiosInstance.get(`/chi-tiet-loai-cong-viec/${id}`);
    },
    deleteDetailCategoryWorksById: (id = "") => {
        return axiosInstance.delete(`/chi-tiet-loai-cong-viec/${id}`);
    },
    getDetailCategoryWorksSearch: (query = {}) => {
        return axiosInstance.get(`/chi-tiet-loai-cong-viec/phan-trang-tim-kiem`, {
            params: query,
        });
    },
    postDetailCategory: (payload = {}) => {
        return axiosInstance.post(`/chi-tiet-loai-cong-viec`, payload);
    },
    putDetailCategory: (payload = {}) => {
        return axiosInstance.post(`/chi-tiet-loai-cong-viec`, payload);
    },
    addNewItemForDetailCategory: (payload = {}) => {
        return axiosInstance.post(`/chi-tiet-loai-cong-viec/them-nhom-chi-tiet-loai`, payload);
    },
    putNewItemForDetailCategory: (id = "", payload = {}) => {
        return axiosInstance.put(`/chi-tiet-loai-cong-viec/sua-nhom-chi-tiet-loai/${id}`, payload);
    },
    updateThumbDetailCategory: (id = "", payload = {}) => {
        return axiosInstance.post(
            `chi-tiet-loai-cong-viec/upload-hinh-nhom-loai-cong-viec/${id}}`,
            { formFile: payload },
            {
                headers: { "Content-Type": "multipart/form-data" },
            }
        );
    },
};

export default DetailCategoryWorkServices;
