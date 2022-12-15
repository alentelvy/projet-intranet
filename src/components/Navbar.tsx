import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Tooltip from '@mui/material/Tooltip';
import Avatar from '@mui/material/Avatar';
import Grid from '@mui/material/Grid';
import {NavLink} from "react-router-dom";

export default function Navbar() {
  return (
    <AppBar position="static">
        <Grid container style = {{padding: "10px"}}> 
            <Grid item xs={6} style = {{display: "flex", alignItems: "center"}} >
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
                    {/* <Typography variant="h6" component="div" >
                        Liste
                    </Typography>  */}
                    </NavLink>
            </Grid>

            <Grid item xs={6} style = {{display: "flex", alignItems: "center", justifyContent: "end"}} >
                <Button color="inherit">Login</Button>
                <Tooltip title="Open settings">
                    <IconButton  sx={{ p: 0 }}>
                        <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                    </IconButton>
                </Tooltip> 
            </Grid>
        
        </Grid>
    </AppBar>
  );
}