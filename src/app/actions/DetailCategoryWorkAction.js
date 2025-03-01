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

export const getDetailCategoryWorksSearch = async (query) => {
    try {
        const res = await DetailCategoryWorkServices.getDetailCategoryWorksSearch(query);
        return res.data.content;
    } catch (error) {
        return error;
    }
};
