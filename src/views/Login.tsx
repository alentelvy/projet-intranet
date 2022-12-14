import axios from 'axios';
import React, { useState } from 'react';

import {login} from '../services/auth';
import {getData} from '../services/data';
import instance from '../services/axios';
import { useNavigate } from 'react-router-dom';



export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    
    const onChangeEmail = (e) => {
        const email = e.target.value;
        setEmail(email);
      };
    
      const onChangePassword = (e) => {
        const password = e.target.value;
        setPassword(password);
      };


    console.log(typeof login)
      const onSubmit = (e) => {
        e.preventDefault()
        login(email, password) 
        navigate("/users");
    }
    

    return(
      <div className="login-wrapper">
        <h1>Please Log In</h1>
        <form onSubmit={onSubmit}>
          <label>
            <p>email</p>
            <input 
                name="email"
                value={email}
                onChange={onChangeEmail}
            />
          </label>
          <label>
            <p>Password</p>
            <input 
                type="password" 
                name="password"
                value={password}
                onChange={onChangePassword}
            />
          </label>
          <div>
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    )
  }