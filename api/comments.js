import { apiBase } from "./axiosConfig";

export const getEventComments = async (id) => {
  const { data } = await apiBase.get(`/comment/${id}`);
  return data.comments;
};
