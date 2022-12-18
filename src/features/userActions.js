
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import instance from "../services/instance";
//import { saveUser } from "./UserSlice";


  // export const login = createAsyncThunk(
  //   'user/login',
  //   async ({ email, password }) => {
  //     try {
  //       const { data } = await instance.post("login", { email, password }); 
  //       localStorage.setItem('object', JSON.stringify(data));
  //       dispatch(saveUser(data))
  //       console.log("login", data)
  //       return data
  //     } catch (error) {
  //       console.log(error)
  //     }
  //   }
  // )

//   export const login = ({ email, password }) => async dispatch => {
//     try {
//         await instance.post("login", { email, password })
//            .then((response) => {
//             console.log("login", response.data)
//            //dispatch(saveUser(response.data))
//            localStorage.setItem('object', JSON.stringify(response.data));
//           })   
//     }
//     catch (e) {
//         return console.error(e.message);
//    }
// }

export const login = createAsyncThunk(
  'user/login',
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const { data } = await instance.post(
        '/login',
        { email, password }
      )
      localStorage.setItem('object', JSON.stringify(data));
      console.log("login", data)
      return data
    } catch (error) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message)
      } else {
        return rejectWithValue(error.message)
      }
    }
  }
)

  export const logout = () => {
    localStorage.removeItem("object");
  };

  // export const getUserDetails = createAsyncThunk(
  //   'user/getUserDetails',
  //   async (arg, { getState, rejectWithValue }) => {
  //     try {
  //       // get user data from store
  //       //const { user } = getState()
  //       const sessionObj = JSON.parse(localStorage.getItem('object'))
  //       console.log("----------sessionObj", sessionObj)
  //       // const { data } = await instance.get(`collaborateurs/${user.user.user.id}`)
  //       const { data } = await instance.get(`collaborateurs/${sessionObj.user.id}`)
  //       console.log("----------data", data)
  //       return data
  //     } catch (error) {
  //       if (error.response && error.response.data.message) {
  //         return rejectWithValue(error.response.data.message)
  //       } else {
  //         return rejectWithValue(error.message)
  //       }
  //     }
  //   }
  // )