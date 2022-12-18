import React, { useEffect, useState } from 'react'
import Grid from '@mui/material/Grid';
import Navbar from '../components/Navbar';
import UserCard from '../components/UserCard';
import { useFormik } from 'formik';
import SearchBar from '../components/SearchBar';
import {getData} from '../services/data';
import {deleteData} from '../services/data';
import {filterAll, filterByPlace, filterByService} from '../services/utils'
import { Typography } from '@mui/material';


const Users = () => {


  const [users, setUsers] = useState([]);
  const [display, setDisplay] = useState([])
  const [del, setDel] = useState(false)


  //fetch all users, refresh if user is deleted by admin
  useEffect(() => {
    getData("collaborateurs")
    .then((data) => {
      setUsers(data)
      setDisplay(data)
    });

  }, [del]);

    
  //default values for searchBar
  const formik = useFormik({
        initialValues: {
          searchStr: '',
          name: '', 
          place: '',
          service: '',
          
      },
        onSubmit: values => {
            //Create an array of used filters
            const filters = []
            values.searchStr && filters.push({"func": filterAll, "val": values.searchStr})
            values.service &&  filters.push({"func": filterByService, "val": values.service})
            values.place && filters.push({"func": filterByPlace, "val": values.place})


            //Apply each filter function to previously filtered result iteratively
            let copy = [...users]
            let result
            filters.forEach(filter => {
              let filterFunc = filter["func"]
              let filterParam = filter["val"]
              result = filterFunc(copy, filterParam)
              if( result.length > 0) {
                copy = result
                console.log("IF", copy, result )
              } else {
                console.log("Else", copy, result )
                return result 
              }
            })
          
          //show filtered result 
          setDisplay(result)

         },
    
      });

    //Delete user in admin mode
    const deleteUser = (id) => {
      deleteData(`collaborateurs/${id}`)
      setDel(!del)
    }
    
  if (users.length == 0) return (<div> Loading</div>);
  if (display.length > 0) return (
  <>
    <Navbar></Navbar>
    <SearchBar formik = {formik}></SearchBar>

      <Grid container style = {{display: "flex", justifyContent: "center", textAlign: "center", alignItems: "center"}}>
      {
        display.map(user => 

              <UserCard cardUser = {user} key = {user.id} deleteUser = {deleteUser}/>
        )
      }
      </Grid>

    </>
  )
  if (display.length == 0) return (
    <>
      <Navbar></Navbar>
      <SearchBar formik = {formik}></SearchBar>
      <Typography> No result</Typography>
      </>
    )
}

export default Users