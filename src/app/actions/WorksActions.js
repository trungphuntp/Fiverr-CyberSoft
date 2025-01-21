import WorksServices from "../services/WorksServices";
import axiosInstance from "../utils/axiosInstance";

export const getMenuCategory = async () => {
    try {
        const res = await WorksServices.getMenuCategoryWorks();
        return res.data.content;
    } catch (error) {
        console.log("error", error);
    }
};

export const getDetailCategoryWorks = async (id) => {
    try {
        const res = await WorksServices.getDetailCategoryWorks(id);
        return res.data.content;
    } catch (error) {
        console.log("error", error);
    }
};
