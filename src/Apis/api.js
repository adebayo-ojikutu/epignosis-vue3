import axios from "axios";

// Create an Axios instance
const api = axios.create({
  baseURL:
    "https://my-json-server.typicode.com/ThrasyvoulosKafasis/epignosis-users",
});

export default api;
