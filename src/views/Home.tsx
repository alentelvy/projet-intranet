import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import { getRandomInt } from '../services/utils'
import {getData} from '../services/data'
import UserCard from '../components/UserCard'
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const Home = () => {

const [user, setUser] = useState([]);
const [random, setRandom] = useState(false);

useEffect(() => {
    getData("collaborateurs/random")
    .then((data) => {
        console.log(data);
        setUser(data)
    });

    }, [random]);
    
  return (
    <>
    <Navbar></Navbar>
    <div style = {{margin: "20px"}}> 
    <Typography gutterBottom variant="h4" component="div">Bienvenue sur l'intranet </Typography>
    <Typography gutterBottom variant="h6" component="div">Une plate-forme de l'entreprise qui vous permet de retrouver tous vos collaborateurs</Typography>
    <Typography gutterBottom variant="h5" component="div">Avez-vous dit bonjour à :</Typography>
    </div>

    <div style = {{display: "flex", justifyContent: "center", alignItems: "center"}}>
        <UserCard user = {user}/>
    </div>
    <Button variant="outlined" style = {{margin: "20px"}} onClick={() => setRandom(!random)}> Dire bonjour à quelqu'un d'autre</Button>
    </>

  )
}

export default Home