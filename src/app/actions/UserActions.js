import UserServices from "../services/UserServices";

export const getUserAll = async () => {
  try {
    const res = await UserServices.getUserAll();
    return res.data.content;
  } catch (error) {
    return error;
  }
};
export const getUserById = async (id) => {
  try {
    const res = await UserServices.getUserById(id);
    return res.data.content;
  } catch (error) {
    return error;
  }
};
export const deleteUserById = async (id) => {
  try {
    const res = await UserServices.deleteUserById(id);
    return res.data;
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
export const postUser = async (payload) => {
  try {
    const res = await UserServices.postUser(payload);
    return res.data.content;
  } catch (error) {
    return error;
  }
};

export const getUserSearch = async (query) => {
  try {
    const res = await UserServices.getUserSearch(query);
    return res.data.content;
  } catch (error) {
    return error;
  }
};
