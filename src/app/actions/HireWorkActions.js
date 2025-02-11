import HireWorkServices from "../services/HireWorkServices";

export const getAllReviews = async () => {
    try {
        const res = await HireWorkServices.getHireWorkAll();
        return res.data.content;
    } catch (error) {
        return error;
    }
};

export const getHireWorkById = async (id) => {
    try {
        const res = await HireWorkServices.getHireWorkById(id);
        return res.data.content;
    } catch (error) {
        return error;
    }
};
export const postHireWork = async (payload) => {
    try {
        const res = await HireWorkServices.postHireWork(payload);
        return res.data.content;
    } catch (error) {
        return error;
    }
};
