import UserServices from "../services/UserServices";

export const getUserById = async (id) => {
    try {
        const res = await UserServices.getUserById(id);
        return res.data.content;
    } catch (error) {
        return error;
    }
};

export const putUserById = async (id, payload) => {
    try {
        const res = await UserServices.putUserById(id, payload);
        return res.data.content;
    } catch (error) {
        return error;
    }
};
