import { apiClient } from "./axiosConfig";
import { transformData, findById } from "../helpers/transform";

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

export const getEventById = async (eventId) => {
  const events = await getAllEvents();
  const event = findById(events, eventId);

  return event;
};
