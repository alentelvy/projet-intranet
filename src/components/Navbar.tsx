import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Tooltip from '@mui/material/Tooltip';
import Avatar from '@mui/material/Avatar';
import Grid from '@mui/material/Grid';
import {NavLink} from "react-router-dom";
import HomeIcon from '@mui/icons-material/Home';
import { useSelector, useDispatch} from 'react-redux'
import { logout } from "../features/auth";

export default function Navbar() {

//logout if there was user in store 
const {  user } = useSelector((state) => state.auth);
const dispatch = useDispatch();
  const onClick = () => {
    user && dispatch(logout())
}


  return (
    <AppBar position="static" style = {{marginBottom: "20px"}}>
        <Grid container style = {{padding: "10px"}}> 
            <Grid item xs={6} style = {{display: "flex", alignItems: "center"}} >
                <NavLink to="/" style={{textDecoration: 'none', color: "inherit"}}>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <HomeIcon />
                
                    </IconButton>                
                    </NavLink>

                    <NavLink to="/users" style={{textDecoration: 'none', color: "inherit"}}>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                
                    </IconButton>                
                    </NavLink>
            </Grid>

            <Grid item xs={6} style = {{display: "flex", alignItems: "center", justifyContent: "end"}} >
                {
                user.user.isAdmin && 
                <NavLink to="/admin/create" style={{textDecoration: 'none', color: "inherit"}}>
                    <Button color="inherit">Créer profile</Button>
                </NavLink>
                }

                <NavLink to="/login" style={{textDecoration: 'none', color: "inherit"}}>
                    <Button color="inherit" onClick = {onClick}>{user ? "Logout" : "Login"}</Button>
                </NavLink>
                <NavLink to="/profile" style={{textDecoration: 'none', color: "inherit"}}>
                    <Tooltip title="Settings">
                        <IconButton  sx={{ p: 0 }}>
                            <Avatar alt="photo" src={user.user.photo} />
                        </IconButton>
                    </Tooltip> 
                </NavLink>
            </Grid>
        
        </Grid>
    </AppBar>
  );
}