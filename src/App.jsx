import React, { useState } from 'react'
import Users from './views/Users'
import Login from './views/Login';
import './App.css'
import { Routes, Route, Outlet, Link } from "react-router-dom";
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
        {/* <Route path="/details/:id" element={<Details/>} />
        <Route path="/edit/:id" element={<Modify/>} /> */}
        <Route path="/login" element={<Login/>} />
      </Routes>
  </div>
  )
}

export default App
