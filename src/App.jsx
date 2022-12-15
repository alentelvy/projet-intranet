import React, { useState } from 'react'
import Users from './views/Users'
import Login from './views/Login';
import Profile from './views/Profile';
import './App.css'
import { Routes, Route} from "react-router-dom";
import Home from './views/Home';


function App() {

  // const [token, setToken] = useState();
  // if(!token) {
  //   return <Login setToken={setToken(localStorage.getItem('token'))} />
  // }

  return (

  <div className="App">
      <header className="App-header">
        {/* <img className="site-logo" src="./public/food.jpeg" alt="" /> */}
      </header>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/users" element={<Users/>} />
        <Route path="/profile" element={<Profile/>} />
        <Route path="/login" element={<Login/>} />
      </Routes>
  </div>
  )
}

export default App
