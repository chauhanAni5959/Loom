import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "http://localhost5000/api",
  withCredentials: true,
});
