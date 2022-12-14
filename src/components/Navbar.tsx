import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Tooltip from '@mui/material/Tooltip';
import Avatar from '@mui/material/Avatar';
import Grid from '@mui/material/Grid';

export default function Navbar() {
  return (
    <AppBar position="static">
    <Grid container style = {{padding: "10px"}}>
        
        <Grid item xs={6} style = {{display: "flex", alignItems: "center"}} >
        <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
        <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" >
            Liste
          </Typography> 
        </Grid>

        <Grid item xs={6} style = {{display: "flex", alignItems: "center", justifyContent: "end"}} >
          <Button color="inherit">Login</Button>
          <Tooltip title="Open settings">
              <IconButton  sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
        </Tooltip>
        </Grid>
        
      
        {/* <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" >
            Liste
          </Typography>

        <Box alignSelf={"end"}>
          <Button color="inherit">Login</Button>
          <Tooltip title="Open settings">
              <IconButton  sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
        </Tooltip>
        </Box>
        </Toolbar> */}
      
    </Grid>
    </AppBar>
  );
}