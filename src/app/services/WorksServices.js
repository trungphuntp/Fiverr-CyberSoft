import axiosInstance from "../utils/axiosInstance";

const WorksServices = {
    getMenuCategoryWorks: () => {
        return axiosInstance.get("/cong-viec/lay-menu-loai-cong-viec");
    },
    getDetailCategoryWorks: (id = "") => {
        return axiosInstance.get(`cong-viec/lay-chi-tiet-loai-cong-viec/${id}`);
    },
};

export default WorksServices;
