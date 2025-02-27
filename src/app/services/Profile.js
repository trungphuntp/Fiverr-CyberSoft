import axiosInstance from "../utils/axiosInstance";

const Profile = {
  getUserById: (id = "") => {
    return axiosInstance.get(`/users/${id}`);
  },
  putUserById: (id = "", data) => {
    // thêm parameter data
    return axiosInstance.put(`/users/${id}`, data);
  },
  postAvatar: (file) => {
    const formData = new FormData(); // Tạo đối tượng FormData
    formData.append("formFile", file);

    return axiosInstance.post(`/users/upload-avatar`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  },
};
export default Profile;
