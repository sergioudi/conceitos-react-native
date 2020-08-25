import axios from "axios";

const api = axios.create({
  baseURL: "http://161.97.101.7:3333",
});

export default api;
