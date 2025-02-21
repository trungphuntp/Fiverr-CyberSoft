import axiosInstance from "../utils/axiosInstance";

const Profile = {
  getUserById: (id = "") => {
    return axiosInstance.get(`/users/${id}`);
  },
  putUserById: (id = "", data) => { // thêm parameter data
    return axiosInstance.put(`/users/${id}`, data);
  },
};
export default Profile;
