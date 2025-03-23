"use server";
import CategoryWorkServices from "../services/CategoryWorkServices";

export const getCategoryWorksById = async (id) => {
    try {
        const res = await CategoryWorkServices.getCategoryWorksById(id);
        return res.data.content;
    } catch (error) {
        console.log("error", error);
        return error;
    }
};
export const postCategoryWork = async (payload) => {
    try {
        const res = await CategoryWorkServices.postCategoryWork(payload);
        return res.data.content;
    } catch (error) {
        console.log("error", error);
        return error;
    }
};
export const putCategoryWork = async (id, payload) => {
    try {
        const res = await CategoryWorkServices.putCategoryWork(id, payload);
        return res.data.content;
    } catch (error) {
        console.log("error", error);
        return error;
    }
};
export const getCategoryWorkSearch = async (query) => {
    try {
        const res = await CategoryWorkServices.getCategoryWorkSearch(query);
        return res.data.content;
    } catch (error) {
        return error;
    }
};
export const deleteCategoryWork = async (id) => {
    try {
        const res = await CategoryWorkServices.deleteCategoryWork(id);
        return res.data;
    } catch (error) {
        return error;
    }
};
