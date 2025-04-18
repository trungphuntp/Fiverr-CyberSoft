import WorksServices from "../services/WorksServices";

export const getWorksById = async (id) => {
  try {
    const res = await WorksServices.getWorksById(id);
    return res.data.content;
  } catch (error) {
    return error;
  }
};
export const postWorks = async (payload) => {
  try {
    const res = await WorksServices.postWorks(payload);
    return res.data.content;
  } catch (error) {
    return error;
  }
};
export const deleteWorksById = async (id) => {
  try {
    const res = await WorksServices.deleteWorksById(id);

    return res.data;
  } catch (error) {
    return error;
  }
};
export const putWorksById = async (id, payload) => {
  try {
    const res = await WorksServices.putWorksById(id, payload);
    return res.data.content;
  } catch (error) {
    return error;
  }
};
export const updateThumbWork = async (id, payload) => {
  try {
    const res = await WorksServices.updateThumbWork(id, payload);
    return res.data.content;
  } catch (error) {
    return error;
  }
};
export const getMenuCategory = async () => {
  try {
    const res = await WorksServices.getMenuCategoryWorks();
    return res.data.content;
  } catch (error) {
    return error;
  }
};

export const getDetailCategoryWorksByIdCate = async (id) => {
  try {
    const res = await WorksServices.getDetailCategoryWorksByIdCate(id);
    return res.data.content;
  } catch (error) {
    return error;
  }
};

export const getWorksByIdCategoryWork = async (id) => {
  try {
    const res = await WorksServices.getWorksByIdCategoryWork(id);
    return res.data.content;
  } catch (error) {
    return error;
  }
};
export const getDetailWorkById = async (id) => {
  try {
    const res = await WorksServices.getDetailWorkById(id);
    return res.data.content;
  } catch (error) {
    return error;
  }
};
export const getSearchWorks = async (query) => {
  try {
    const res = await WorksServices.getSearchWorks(query);
    return res.data.content;
  } catch (error) {
    return error;
  }
};
