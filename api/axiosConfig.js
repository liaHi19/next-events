import axios from "axios";

export const apiClient = axios.create({
  baseURL: "https://next-basic-57623-default-rtdb.firebaseio.com/events.json",
});
