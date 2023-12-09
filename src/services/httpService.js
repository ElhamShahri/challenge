import axios from "axios";

axios.defaults.baseURL = "https://api.realworld.io/api";

axios.defaults.headers.common["Authorization"] =
  "Token " + localStorage.getItem("token");

axios.interceptors.request.use(
  (request) => {
    return request;
  },
  (error) => {
    console.log(error);
    return error;
  }
);

axios.interceptors.response.use(
  (response) => {
    console.log(response);
    return response;
  },
  (error) => {
    return error;
  }
);

const http = {
  get: axios.get,
  put: axios.put,
  delete: axios.delete,
  post: axios.post,
};

export default http;
