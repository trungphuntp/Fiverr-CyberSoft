import axiosInstance from "../utils/axiosInstance";

const WorksServices = {
    getWorksById: (id = "") => {
        return axiosInstance.get(`/cong-viec/${id}`);
    },
    postWorks: (payload = "") => {
        return axiosInstance.post(`/cong-viec/`, payload);
    },

    deleteWorksById: (id = "") => {
        return axiosInstance.delete(`/cong-viec/${id}`);
    },
    putWorksById: (id = "", payload = {}) => {
        return axiosInstance.put(`/cong-viec/${id}`, payload);
    },
    updateThumbWork: (id = "", payload = {}) => {
        return axiosInstance.post(
            `cong-viec/upload-hinh-cong-viec/${id}`,
            { formFile: payload },
            {
                headers: { "Content-Type": "multipart/form-data" },
            }
        );
    },

    getMenuCategoryWorks: () => {
        return axiosInstance.get("/cong-viec/lay-menu-loai-cong-viec");
    },
    getDetailCategoryWorksByIdCate: (id = "") => {
        return axiosInstance.get(`/cong-viec/lay-chi-tiet-loai-cong-viec/${id}`);
    },
    getWorksByIdCategoryWork: (id = "") => {
        return axiosInstance.get(`/cong-viec/lay-cong-viec-theo-chi-tiet-loai/${id}`);
    },
    getDetailWorkById: (id = "") => {
        return axiosInstance.get(`/cong-viec/lay-cong-viec-chi-tiet/${id}`);
    },
    getDetailWorkById: (id = "") => {
        return axiosInstance.get(`/cong-viec/lay-cong-viec-chi-tiet/${id}`);
    },
    getSearchWorks: (query = {}) => {
        return axiosInstance.get(`/cong-viec/phan-trang-tim-kiem`, {
            params: query,
        });
    },
};

export default WorksServices;
