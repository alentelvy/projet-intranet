import React from 'react'
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
import {getAge, formatDate} from '../services/utils'

const UserCard = ({user}) => {
  return (
    <Grid item xs={4} style = {{marginBottom: "15px"}}>
    <Card sx={{ maxWidth: 350, height: '100%' , marginRight: "15px"}} >
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
        <div style = {{alignItems: "center"}}> 
          <div><MailIcon /> {user.email}</div>
          <div><LocalPhoneIcon /> {user.phone}</div>
          <div><CakeIcon /> Anniversaire {formatDate(user.birthdate)}</div>
        </div>
        </CardContent>
      </CardActionArea>
    </Card>
  </Grid>
  )
}

export default UserCard