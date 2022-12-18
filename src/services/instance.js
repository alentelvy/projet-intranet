import axios from "axios";

const defaultOptions = {
    baseURL: "http://localhost:9000/api/",
    headers: {
      "Content-Type": "application/json",
    },
  };
  
  // Create instance
  let instance = axios.create(defaultOptions);
  
  // Set the AUTH token for any request 
  instance.interceptors.request.use((config) => {
    const sessionObj = JSON.parse(localStorage.getItem('object'))
    config.headers.Authorization = sessionObj.token ? `Bearer ${sessionObj.token}` : "";
    return config;
  });

export default instance