import AuthServices from "../services/AuthServices";

export const loginAction = async (payload) => {
    try {
        const res = await AuthServices.login(payload);
        return res.data.content;
    } catch (error) {
        return error;
    }
};
export const registerActon = async (payload) => {
    try {
        const res = await AuthServices.register(payload);
        return res.data.content;
    } catch (error) {
        return error;
    }
};
