import api from "../utils/api";

export const getPosts = async () => {
  console.log("Base URL:", api.defaults.baseURL); // should be https://dummyjson.com

  try {
    const response = await api.get("/posts");
    return response.data.posts;
  } catch (error) {
    console.error("Error fetching posts:", error.response?.status, error.response?.data);
    return [];
  }
};
