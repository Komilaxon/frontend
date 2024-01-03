import axios from "axios";

const request = axios.create({ baseURL: "http://localhost:4000" });

request.interceptors.response.use(
  (request) => request,
  (error) => Promise.reject(error)
);

export default request;
