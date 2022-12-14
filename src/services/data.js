import axios from "axios";




const API_URL = "http://localhost:9000/api/";


export const getData = async (param) => {
  const token = localStorage.getItem('token')
  console.log("___________", `Bearer ${token}`)
  if (token) {
      const res = await axios.get(
          API_URL+param,
          {
              headers: {"Authorization" : `Bearer ${token}`}
          }
      );
      console.log(res.data)
      return res.data;
  }
  else {console.log('no data')}

};

const getPublicContent = () => {
  return axios.get(API_URL + "/collaborateurs");
};

// const getUserBoard = () => {
//   return axios.get(API_URL + "user", { headers: authHeader() });
// };

// const getModeratorBoard = () => {
//   return axios.get(API_URL + "mod", { headers: authHeader() });
// };

// const getAdminBoard = () => {
//   return axios.get(API_URL + "admin", { headers: authHeader() });
// };

export default {
  getPublicContent,
//   getUserBoard,
//   getModeratorBoard,
//   getAdminBoard,
};