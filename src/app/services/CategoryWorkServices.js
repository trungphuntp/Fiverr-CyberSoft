import axiosInstance from "../utils/axiosInstance";

const CategoryWorkServices = {
    getCategoryWorksById: (id = "") => {
        return axiosInstance.get(`/loai-cong-viec/${id}`);
    },
};

export default CategoryWorkServices;
