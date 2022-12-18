import axios from "axios";

const API_URL = "http://localhost:9000/api/";

//add data to local storage
const login = (email, password) => {
    
    return axios.post(API_URL + "login", {
        email,
        password,
    })
    .then((response) => {
        if (response.data.token) {
            localStorage.setItem("user", JSON.stringify(response.data));
            //localStorage.setItem('object', JSON.stringify(response.data));
        }
        return response.data;
    })
    .catch((error) =>{console.log(error)});
}

//delete data from local storage
const logout = () => {
  //localStorage.removeItem("object");
  localStorage.removeItem("user");
};


const AuthService = {
    login,
    logout,
  }
  
  export default AuthService;