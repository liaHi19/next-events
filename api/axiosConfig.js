import axios from "axios";

export const apiClient = axios.create({
  baseURL: "https://next-basic-57623-default-rtdb.firebaseio.com/events.json",
});

export const apiBase = axios.create({
  baseURL: "http://localhost:3000/api",
  headers: {
    "Content-Type": "application/json",
  },
});
