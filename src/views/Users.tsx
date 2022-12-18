import React, { useEffect, useState } from 'react'
import Grid from '@mui/material/Grid';
import Navbar from '../components/Navbar';
import UserCard from '../components/UserCard';
import { useFormik, useFormikContext } from 'formik';
import SearchBar from '../components/SearchBar';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector} from 'react-redux'
// import { getData } from '../features/dataActions'
import {getData} from '../services/data';
import {deleteData} from '../services/data';
import {filterAll, filterByPlace, filterByService} from '../services/utils'


const Users = () => {

  const sessionObj = JSON.parse(localStorage.getItem('object')) || false
  console.log("sessionObj", sessionObj)
  const [users, setUsers] = useState([]);
  const [display, setDisplay] = useState([])
  const [del, setDel] = useState(false)



  useEffect(() => {
    getData("collaborateurs")
    .then((data) => {
      setUsers(data)
      setDisplay(data)
    });

  }, [del]);

    
  
  const formik = useFormik({
        initialValues: {
          searchStr: '',
          name: '', 
          place: '',
          service: '',
          
      },
        onSubmit: values => {
           console.log("formik", values)


            //Create an array of used filters
            const filters = []
            values.searchStr && filters.push({"func": filterAll, "val": values.searchStr})
            values.service &&  filters.push({"func": filterByService, "val": values.service})
            values.place && filters.push({"func": filterByPlace, "val": values.place})


            //Apply each filter function to previously filtered result
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

          setDisplay(result)

         },
    
      });

    //Delete user in admin mode
    const deleteUser = (id) => {
      deleteData(`collaborateurs/${id}`)
      setDel(!del)
    }
    
  if (users.length === 0) return (<div> Loading</div>);
  if (display.length > 0) return (
  <>
    <Navbar></Navbar>
    <SearchBar formik = {formik}></SearchBar>

      <Grid container style = {{display: "flex", justifyContent: "center", textAlign: "center", alignItems: "center"}}>
      {
        display.map(user => 

              <UserCard user = {user} key = {user.id} deleteUser = {deleteUser}/>
        )
      }
      </Grid>

    </>
  )
}

export default Users