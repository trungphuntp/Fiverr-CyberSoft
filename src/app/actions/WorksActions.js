"use server";
import WorksServices from "../services/WorksServices";

export const getMenuCategory = async () => {
    let isLoading = true;
    try {
        const res = await WorksServices.getMenuCategoryWorks();
        let isLoading = false;

        return {
            data: res.data.content,
            loading: isLoading,
        };
    } catch (error) {
        console.log("error", error);
        return {
            error,
            loading: isLoading,
        };
    }
};

export const getDetailCategoryWorksByIdCate = async (id) => {
    try {
        const res = await WorksServices.getDetailCategoryWorksByIdCate(id);
        return res.data.content;
    } catch (error) {
        console.log("error", error);
        return error;
    }
};

export const getWorksByIdCategoryWork = async (id) => {
    try {
        const res = await WorksServices.getWorksByIdCategoryWork(id);
        return res.data.content;
    } catch (error) {
        console.log("error", error);
        return error;
    }
};
export const getDetailWorkById = async (id) => {
    try {
        const res = await WorksServices.getDetailWorkById(id);
        return res.data.content;
    } catch (error) {
        console.log("error", error);
        return error;
    }
};
