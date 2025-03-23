"use server";
import ReviewsServices from "../services/ReviewsServices";

export const getAllReviews = async () => {
    try {
        const res = await ReviewsServices.getAllReviews();
        return res.data.content;
    } catch (error) {
        console.log("error", error);
        return error;
    }
};

export const getReviewsByIdWork = async (id) => {
    try {
        const res = await ReviewsServices.getReviewsByIdWork(id);
        return res.data.content;
    } catch (error) {
        console.log("error", error);
        return error;
    }
};
export const postReviewsByIdWork = async (payload) => {
    try {
        const res = await ReviewsServices.postReviewsByIdWork(payload);
        return res.data.content;
    } catch (error) {
        console.log("error", error);
        return error;
    }
};
