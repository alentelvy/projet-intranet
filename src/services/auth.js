import axios from "axios";

const API_URL = "http://localhost:9000/api/";


export const login = (email, password) => {
    
    return axios.post(API_URL + "login", {
        email,
        password,
    })
    .then((response) => {
      // console.log(response.data)
        if (response.data.token) {
            
            //localStorage.setItem("token", response.data.token);
            localStorage.setItem('object', JSON.stringify(response.data));
            //getData(param);
        }
        return response.data;
    })
    .catch((error) =>{console.log(error)});
}

export const logout = () => {
  localStorage.removeItem("object");
};


