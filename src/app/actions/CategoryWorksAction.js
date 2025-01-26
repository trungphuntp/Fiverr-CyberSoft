import CategoryWorkServices from "../services/CategoryWorkServices";

export const getCategoryWorksById = async (id) => {
    let isLoading = true;
    try {
        const res = await CategoryWorkServices.getCategoryWorksById(id);
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
