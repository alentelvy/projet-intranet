import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import {deleteData, getData} from '../services/data'
import UserCard from '../components/UserCard'
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';


const Home = () => {

const [user, setUser] = useState([]);
const [random, setRandom] = useState(false);
const [del, setDel] = useState(false)

//fetch data on refresh and if user was deleted by admin
useEffect(() => {
    getData("collaborateurs/random")
    .then((data) => {
        console.log(data);
        setUser(data)
    });
    }, [random, del]);

  //Delete user in admin mode
  const deleteUser = (id) => {
    deleteData(`collaborateurs/${id}`)
    setDel(!del)
  }
    
  return (
    <>
    <Navbar></Navbar>
    <div style = {{margin: "20px"}}> 
    <Typography gutterBottom variant="h4" component="div">Bienvenue sur l'intranet </Typography>
    <Typography gutterBottom variant="h6" component="div">Une plate-forme de l'entreprise qui vous permet de retrouver tous vos collaborateurs</Typography>
    <Typography gutterBottom variant="h5" component="div">Avez-vous dit bonjour à :</Typography>
    </div>

    <div style = {{display: "flex", justifyContent: "center", alignItems: "center"}}>
        <UserCard cardUser = {user} deleteUser ={deleteUser}/>
    </div>
    <Button variant="outlined" style = {{margin: "20px"}} onClick={() => setRandom(!random)}> Dire bonjour à quelqu'un d'autre</Button>
    </>

  )
}

export default Home