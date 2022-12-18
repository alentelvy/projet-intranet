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
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';


const UserCard = ({user, deleteUser}) => {

  const sessionObj = JSON.parse(localStorage.getItem('object'))


  return (
    <Grid item xs={4} style = {{marginBottom: "15px"}}>
    <Card sx={{ maxWidth: 350, height: '100%'}} >
      <CardActionArea>
        <div style = {{display: "flex", alignItems: "flex-end", justifyContent: "flex-end", padding: "15px"}}> 
          <Chip label= {user.service} variant="outlined"/>
        </div>
        <CardMedia
          component="img"
          height="100%"
          image={user.photo}
          alt="photo"
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

        {
                sessionObj.user.isAdmin && 
                <Link to={`/admin/edit/${user.id}`} style={{textDecoration: 'none', color: "inherit"}}>
                    <Button color="inherit" >Éditer</Button>
                </Link>
                
        }
        {
                sessionObj.user.isAdmin && 
                    <Button color="inherit" onClick = {() => deleteUser(user.id)}>Supprimer</Button>
        }
      </CardActionArea>
    </Card>
  </Grid>
  )
}

export default UserCard