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

export const getDetailCategoryWorks = async (id) => {
    let isLoading = true;

    try {
        const res = await WorksServices.getDetailCategoryWorks(id);
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
