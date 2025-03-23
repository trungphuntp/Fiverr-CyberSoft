"use server";
import DetailCategoryWorkServices from "../services/DetailCategoryWorkServices";

export const getDetailCategoryWorksById = async (id) => {
    try {
        const res = await DetailCategoryWorkServices.getDetailCategoryWorksById(id);
        return res.data.content;
    } catch (error) {
        console.log("error", error);
        return error;
    }
};

export const deleteDetailCategoryWorksById = async (id) => {
    try {
        const res = await DetailCategoryWorkServices.deleteDetailCategoryWorksById(id);
        return res.data;
    } catch (error) {
        console.log("error", error);
        return error;
    }
};

export const getDetailCategoryWorksSearch = async (query) => {
    try {
        const res = await DetailCategoryWorkServices.getDetailCategoryWorksSearch(query);
        return res.data.content;
    } catch (error) {
        return error;
    }
};

export const postDetailCategory = async (payload) => {
    try {
        const res = await DetailCategoryWorkServices.postDetailCategory(payload);
        return res.data.content;
    } catch (error) {
        console.log("error", error);
        return error;
    }
};
export const putDetailCategory = async (payload) => {
    try {
        const res = await DetailCategoryWorkServices.putDetailCategory(payload);
        return res.data.content;
    } catch (error) {
        console.log("error", error);
        return error;
    }
};
export const updateThumbDetailCategory = async (id, payload) => {
    try {
        const res = await DetailCategoryWorkServices.updateThumbDetailCategory(id, payload);
        return res.data.content;
    } catch (error) {
        console.log("error", error);
        return error;
    }
};
export const addNewItemForDetailCategory = async (payload) => {
    try {
        const res = await DetailCategoryWorkServices.addNewItemForDetailCategory(payload);
        return res.data.content;
    } catch (error) {
        console.log("error", error);
        return error;
    }
};
export const putNewItemForDetailCategory = async (id, payload) => {
    try {
        const res = await DetailCategoryWorkServices.putNewItemForDetailCategory(id, payload);
        return res.data.content;
    } catch (error) {
        console.log("error", error);
        return error;
    }
};
