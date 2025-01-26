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

export const getDetailCategoryWorksByIdCate = async (id) => {
    let isLoading = true;

    try {
        const res = await WorksServices.getDetailCategoryWorksByIdCate(id);
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

export const getWorksByIdCategoryWork = async (id) => {
    let isLoading = true;
    try {
        const res = await WorksServices.getWorksByIdCategoryWork(id);
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
export const getDetailWorkById = async (id) => {
    let isLoading = true;
    try {
        const res = await WorksServices.getDetailWorkById(id);
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
