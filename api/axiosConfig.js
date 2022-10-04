import axios from "axios";

// import { IS_PRODUCTION, PUBLIC, CLIENT } from "../config/constants";

export const apiClient = axios.create({
  baseURL: "https://next-basic-57623-default-rtdb.firebaseio.com/events.json",
});

export const apiBase = axios.create({
  baseURL: "/api",
  headers: {
    "Content-Type": "application/json",
  },
});
