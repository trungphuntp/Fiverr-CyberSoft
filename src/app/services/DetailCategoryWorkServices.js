import axiosInstance from "../utils/axiosInstance";

const DetailCategoryWorkServices = {
    getDetailCategoryWorksById: (id = "") => {
        return axiosInstance.get(`/chi-tiet-loai-cong-viec/${id}`);
    },
};

export default DetailCategoryWorkServices;
