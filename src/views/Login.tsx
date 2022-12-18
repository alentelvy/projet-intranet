import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch} from 'react-redux'
import { login } from "../features/auth";
import Button from '@mui/material/Button';

export default function Login() {

let navigate = useNavigate();
const [loading, setLoading] = useState(false);
const dispatch = useDispatch();
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");

  //get email
    const onChangeEmail = (e) => {
    const email = e.target.value;
    setEmail(email);
    };
  
  //get password
    const onChangePassword = (e) => {
      const password = e.target.value;
      setPassword(password);
    };

    //login and redirect to home page
    const onSubmit = (e) => {
    e.preventDefault()
    setLoading(true);

    dispatch(login({ email, password }))
    .unwrap()
    .then(() => {
      navigate("/");
      window.location.reload();
    })
    .catch(() => {
      setLoading(false);
    });
  };

  

    return(
      <div className="login-wrapper">
        <h1>Log In</h1>
        <form onSubmit={onSubmit}>
          <label>
            <p>Email</p>
            <input 
                name="email"
                value={email}
                onChange={onChangeEmail}
            />
          </label>
          <label>
            <p>Mot de passe</p>
            <input 
                type="password" 
                name="password"
                value={password}
                onChange={onChangePassword}
            />
          </label>
          <div>
            <Button type="submit" variant="contained" style={{margin: '10px', height: "100%"}}> Submit </Button>
          </div>
        </form>
      </div>
    )
  }