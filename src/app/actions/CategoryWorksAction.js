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
