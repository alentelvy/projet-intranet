import axios from "axios";

// const instance = axios.create({
//     baseURL: "http://localhost:9000/api",
//     timeout: 1000,
//     headers: {'X-Custom-Header': 'foobar'}
//   });

// export default instance



const fetchClient = () => {
  const defaultOptions = {
    baseURL: "http://localhost:9000/api",
    method: 'get',
    headers: {
      'Content-Type': 'application/json',
    },
  };


  let instance = axios.create(defaultOptions);


  instance.interceptors.request.use((config) => {
    const token = localStorage.getItem('token');
    config.headers.Authorization =  token ? `Bearer ${token}` : '';
    return config;
  });

  return instance;
};

export default fetchClient();