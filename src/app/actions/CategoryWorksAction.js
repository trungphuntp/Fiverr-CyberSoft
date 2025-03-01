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
export const getCategoryWorkSearch = async (query) => {
    try {
        const res = await CategoryWorkServices.getCategoryWorkSearch(query);
        return res.data.content;
    } catch (error) {
        return error;
    }
};
