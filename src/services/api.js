import axios from "axios";

const token = localStorage.getItem("token");

const api = axios.create({
  baseURL: "https://ton-backend.onrender.com/api",
  headers: {
    Authorization: token ? `Bearer ${token}` : "",
    Accept: "application/json",
  },
});

export default api;