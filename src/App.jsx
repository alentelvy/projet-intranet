import React from 'react'
import Users from './views/Users'
import Login from './views/Login';
import Profile from './views/Profile';
import EditProfile from './views/EditProfile';
import CreateProfile from './views/CreateProfile';
import './App.css'
import { Routes, Route} from "react-router-dom";
import Home from './views/Home';


function App() {

  return (

  <div className="App">
      <header className="App-header">
      </header>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/users" element={<Users/>} />
        <Route path="/profile" element={<Profile/>} />
        <Route path="/admin/edit/:id" element={<EditProfile/>} />
        <Route path="/admin/create" element={<CreateProfile/>} />
        <Route path="/login" element={<Login/>} />
      </Routes>
  </div>
  )
}

export default App
