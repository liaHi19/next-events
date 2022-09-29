import axios from "axios";
import {
  IS_PRODUCTION,
  PRODUCTION,
  DEVELOPMENT,
} from "../components/config/constants";

export const apiClient = axios.create({
  baseURL: "https://next-basic-57623-default-rtdb.firebaseio.com/events.json",
});

export const apiBase = axios.create({
  baseURL: IS_PRODUCTION ? `${PRODUCTION}/api` : `${DEVELOPMENT}/api`,
  headers: {
    "Content-Type": "application/json",
  },
});
