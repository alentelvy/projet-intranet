import axios from "axios";




const API_URL = "http://localhost:9000/api/";
const sessionObj = JSON.parse(localStorage.getItem('object'))
console.log(sessionObj.token)

//Get data 
export const getData = async (param) => {
  console.log("___________", `Bearer ${sessionObj.token}`)
  if (token) {
      const res = await axios.get(
          API_URL+param,
          {
              headers: {"Authorization" : `Bearer ${sessionObj.token}`}
          }
      );
      console.log(res.data)
      return res.data;
  }
  else {console.log('no data')}

};

//Put data 
export const putData = async (param, values) => {
  if (token) {
      axios({
        method: 'PUT',
        url: API_URL+param,
        data: values, 
        headers: {"Authorization" : `Bearer ${sessionObj.token}`}
      })
        .then((res) => {
          console.log("submitted", res)
          alert("successfully edited")
          setIsSubmitting(!isSubmitting)
        })
        .catch((error) =>{
          console.log(error)
      });
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