import { apiBase } from "./axiosConfig";

export const getEventComments = async (id) => {
  const { data } = await apiBase.get(`/comments/${id}`);
  return data.comments;
};
