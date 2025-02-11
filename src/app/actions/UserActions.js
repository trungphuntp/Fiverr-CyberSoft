import UserServices from "../services/UserServices";

export const getUserById = async (id) => {
    try {
        const res = await UserServices.getUserById(id);
        return res.data.content;
    } catch (error) {
        return error;
    }
};
