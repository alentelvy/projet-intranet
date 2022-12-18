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
import { useSelector} from 'react-redux'

const UserCard = ({cardUser, deleteUser}) => {

  const {  user } = useSelector((state) => state.auth);

  return (
    <Grid item xs={4} style = {{marginBottom: "15px"}}>
    <Card sx={{ maxWidth: 350, height: '100%'}} >
        <div style = {{display: "flex", alignItems: "flex-end", justifyContent: "flex-end", padding: "15px"}}> 
          <Chip label= {cardUser.service} variant="outlined"/>
        </div>
      <CardActionArea style = {{marginBottom: "15px"}}>
        <CardMedia
          component="img"
          height="100%"
          image={cardUser.photo}
          alt="photo"
        />
        <CardContent style = {{textAlign: "left"}}>
          <Typography gutterBottom variant="h5" component="div">
            {`${cardUser.firstname} ${cardUser.lastname} ${getAge(cardUser.birthdate)}`}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {`${cardUser.city} ${cardUser.country}`}
          </Typography>
        <div style = {{alignItems: "center"}}> 
          <div><MailIcon /> {cardUser.email}</div>
          <div><LocalPhoneIcon /> {cardUser.phone}</div>
          <div><CakeIcon /> Anniversaire {formatDate(cardUser.birthdate)}</div>
        </div>
        </CardContent>

        {
                user.user.isAdmin && 
                <Link to={`/admin/edit/${cardUser.id}`} style={{textDecoration: 'none', color: "inherit"}}>
                    <Button variant="contained" style = {{margin: "10px"}}> Éditer</Button>
                </Link>
                
        }
        {
                user.user.isAdmin && 
                    <Button variant="outlined" style = {{margin: "10px"}} onClick = {() => deleteUser(cardUser.id)}>Supprimer</Button>
        }
      </CardActionArea>
    </Card>
  </Grid>
  )
}

export default UserCard