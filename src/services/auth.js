import axios from "axios";

const API_URL = "http://localhost:9000/api/";

const register = (email, password) => {
  return axios.post(API_URL + "signup", {
    email,
    password,
  });
};


export const login = (email, password) => {
    
    return axios.post(API_URL + "login", {
        email,
        password,
    })
    .then((response) => {
      console.log(response.data)
        if (response.data.token) {
            
            //localStorage.setItem("token", response.data.token);
            localStorage.setItem('object', JSON.stringify(response.data));
            //getData(param);
        }
        return response.data;
    })
    .catch((error) =>{console.log(error)});
}

const logout = () => {
  localStorage.removeItem("user");
};

// const authHeader = () => {
//     const token = localStorage.getItem('token')
  
//     if (user && user.accessToken) {
//         console.log(user)
//       return { Authorization: 'Bearer ' + user.accessToken };
      
//     } else {
//         console.log("failed")
//       return {};
//     }
// }




// export default {
//   register,
//   login,
//   logout,
// };