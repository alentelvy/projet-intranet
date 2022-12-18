
import { createSlice } from '@reduxjs/toolkit'
// import {getUserDetails, login } from './userActions'
import {login } from './userActions'

// initialize userToken from local storage
const token = localStorage.getItem('token')
  ? localStorage.getItem('token')
  : null

const user = localStorage.getItem('user') 
? JSON.parse(localStorage.getItem('user'))
: null

console.log("*****", user)
const initialState = {
  loading: false,
  user: user,
  token,
  error: null,
  success: false,
}


const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: {
    // login user
    [login.pending]: (state) => {
      state.loading = true
      state.error = null
    },
    [login.fulfilled]: (state, { payload }) => {
      state.loading = false
      state.user = payload
      state.token = payload.token
    },
    [login.rejected]: (state, { payload }) => {
      state.loading = false
      state.error = payload
    },
    // [getUserDetails.pending]: (state) => {
    //   state.loading = true
    // },
    // [getUserDetails.fulfilled]: (state, { payload }) => {
    //   state.loading = false
    //   state.userInfo = payload
    // },
    // [getUserDetails.rejected]: (state, { payload }) => {
    //   state.loading = false
    // },
  },
})



export default userSlice.reducer