import axios from "axios";

//Configure axios instance
const defaultOptions = {
    baseURL: "http://localhost:9000/api/",
    headers: {
      "Content-Type": "application/json",
    },
  };
  
let instance = axios.create(defaultOptions);
  
  // Set the AUTH token for any request 
  instance.interceptors.request.use((config) => {
    const user = JSON.parse(localStorage.getItem('user'))
    config.headers.Authorization = user.token ? `Bearer ${user.token}` : "";
    return config;
  });

export default instance