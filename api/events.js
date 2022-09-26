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

export const getFilteredEvents = async (dateFilter) => {
  const { year, month } = dateFilter;

  const events = await getAllEvents();

  let filteredEvents = events.filter((event) => {
    const eventDate = new Date(event.date);
    return (
      eventDate.getFullYear() === year && eventDate.getMonth() === month - 1
    );
  });

  return filteredEvents;
};
