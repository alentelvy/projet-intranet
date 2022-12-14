import React, { useEffect, useState } from 'react'
import instance from '../services/axios';
import axios from "axios";
import {getData} from '../services/data';
import {getAge, formatDate} from '../services/utils'


import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import MailIcon from '@mui/icons-material/Mail';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import CakeIcon from '@mui/icons-material/Cake';
import Chip from '@mui/material/Chip';
import Grid from '@mui/material/Grid';
import Navbar from '../components/Navbar';



const Users = () => {

  const [users, setUsers] = useState([]);

    useEffect(() => {
        const res  = getData("collaborateurs")
        .then((data) => {
          console.log(data);
          setUsers(data)
        });
  
      }, []);
  
  return (
  <>
    <Navbar></Navbar>
    <Grid container spacing={2}>
    
    {
      users.map(user => 
  
    <Grid item xs={4} spacing = {2}>
      <Card sx={{ maxWidth: 350, height: '100%'}} >
      <CardActionArea>
        <div style = {{display: "flex", alignItems: "flex-end", justifyContent: "flex-end", padding: "15px"}}> 
          <Chip label= {user.service} variant="outlined"/>
        </div>
        <CardMedia
          component="img"
          height="100%"
          image={user.photo}
          alt="green iguana"
        />
        <CardContent style = {{textAlign: "left"}}>
          <Typography gutterBottom variant="h5" component="div">
            {`${user.firstname} ${user.lastname} ${getAge(user.birthdate)}`}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {`${user.city} ${user.country}`}
          </Typography>
          <div><MailIcon /> {user.email}</div>
          <div><LocalPhoneIcon /> {user.phone}</div>
          <div><CakeIcon /> Anniversaire {formatDate(user.birthdate)}</div>
        </CardContent>
      </CardActionArea>
    </Card>
    </Grid>
    
        )
    }

    </Grid>
    </>
  )
}

export default Users