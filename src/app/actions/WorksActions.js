"use server";
import WorksServices from "../services/WorksServices";

export const getMenuCategory = async () => {
    try {
        const res = await WorksServices.getMenuCategoryWorks();
        return res.data.content;
    } catch (error) {
        return error;
    }
};

export const getDetailCategoryWorksByIdCate = async (id) => {
    try {
        const res = await WorksServices.getDetailCategoryWorksByIdCate(id);
        return res.data.content;
    } catch (error) {
        return error;
    }
};

export const getWorksByIdCategoryWork = async (id) => {
    try {
        const res = await WorksServices.getWorksByIdCategoryWork(id);
        return res.data.content;
    } catch (error) {
        return error;
    }
};
export const getDetailWorkById = async (id) => {
    try {
        const res = await WorksServices.getDetailWorkById(id);
        console.log("res", res);

        return res.data.content;
    } catch (error) {
        return error;
    }
};
export const getSearchWorks = async (query) => {
    try {
        const res = await WorksServices.getSearchWorks(query);
        return res.data.content;
    } catch (error) {
        return error;
    }
};
