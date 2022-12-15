import React, { useEffect, useState } from 'react'
import instance from '../services/axios';
import axios from "axios";
import {getData} from '../services/data';

import Grid from '@mui/material/Grid';
import Navbar from '../components/Navbar';
import UserCard from '../components/UserCard';
import { useFormik } from 'formik';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

const Users = () => {

  const [users, setUsers] = useState([]);

    useEffect(() => {
        getData("collaborateurs")
        .then((data) => {
          console.log(data);
          setUsers(data)
        });
  
      }, []);
  

      const formik = useFormik({
        initialValues: {
          searchStr: '',
          name: '', 
          place: '',
          category: '',
          
      },
        onSubmit: values => {
           console.log(values)
         },
    
      });
    
  return (
  <>
    <Navbar></Navbar>



    <form onSubmit={formik.handleSubmit}>
      <Grid container style = {{display: "flex", justifyContent: "center", textAlign: "center", alignItems: "center", margin: '25px'}}> 
        

          <TextField 
            style = {{margin: '10px'}}
            id="searchStr" 
            label="Rechercher" 
            variant="outlined"
            onChange={formik.handleChange}
            value={formik.values.searchStr} 
          />

          <TextField 
            style = {{margin: '10px'}}
            id="name" 
            label="Nom" 
            variant="outlined"
            onChange={formik.handleChange}
            value={formik.values.name} 
          />

          <TextField 
            style = {{margin: '10px'}}
            id="place" 
            label="Localisation" 
            variant="outlined"
            onChange={formik.handleChange}
            value={formik.values.place} 
          />


            <select
              id="category" 
              value={formik.values.category}
              onChange={formik.handleChange}
              style={{margin: '10px', color: "grey"}}
            >
              <option value="" label="Catégorie" />
              <option value='marketing' label="marketing" />
              <option value="technique"  label="technique" />
              <option value="client"  label="client" />
            </select>

          <Button type="submit" variant="contained" style={{margin: '10px', height: "100%"}}> Submit </Button>
        
      </Grid>
    </form>

      <Grid container style = {{display: "flex", justifyContent: "center", textAlign: "center", alignItems: "center"}}>
      {
        users.map(user => 
          
          <UserCard user = {user} key = {user.id}/>
      
          )
      }
      </Grid>

    </>
  )
}

export default Users