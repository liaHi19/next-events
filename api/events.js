import { apiClient } from "./axiosConfig";
import { transformData } from "../helpers/transform";

export const getAllEvents = async () => {
  const { data } = await apiClient.get();
  const events = transformData(data);

  return events;
};

export const getFeaturedEvents = async () => {
  const events = await getAllEvents();
  const featuredEvents = events.filter((event) => event.isFeatured);

  return featuredEvents;
};
