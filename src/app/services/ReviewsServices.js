import axiosInstance from "../utils/axiosInstance";

const ReviewsServices = {
    getAllReviews: () => {
        return axiosInstance.get(`/binh-luan`);
    },
    getReviewsByIdWork: (id = "") => {
        return axiosInstance.get(`/binh-luan/lay-binh-luan-theo-cong-viec/${id}`);
    },
    postReviewsByIdWork: (payload = {}) => {
        return axiosInstance.get(`/binh-luan`, payload);
    },
};

export default ReviewsServices;
