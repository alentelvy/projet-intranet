import React, { useEffect } from 'react'
import Typography from '@mui/material/Typography'
import Navbar from '../components/Navbar';
import { useFormik } from 'formik';

import {putData} from '../services/data';
//import { putData } from '../features/dataActions'
import ProfileForm from '../components/ProfileForm';
import { useDispatch, useSelector} from 'react-redux'
//import { getUserDetails } from '../features/userActions'

const Profile = () => {

  const sessionObj = JSON.parse(localStorage.getItem('object'))

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
          gender: sessionObj ? sessionObj.user.gender : '',
          firstname: sessionObj ? sessionObj.user.firstname : '',
          lastname: sessionObj ? sessionObj.user.lastname : '',
          city: sessionObj ? sessionObj.user.city : '',
          country: sessionObj ? sessionObj.user.country : '',
          email: sessionObj ? sessionObj.user.email : '',
          birthdate: sessionObj ? sessionObj.user.birthdate : '',
          password: '',
          phone: sessionObj ? sessionObj.user.phone : '',
          photo: "https://randomuser.me/api/portraits/women/91.jpg",
          service: sessionObj ? sessionObj.user.service : '',
          isAdmin: sessionObj ? (sessionObj.user.isAdmin ? true : false): '',
          
      },
    onSubmit: values => {
      putData(`collaborateurs/${sessionObj.user.id}`, values)
     },
  });

  
  return (
    <>
    <Navbar></Navbar>
    <Typography variant="h5">Modifier mon profil</Typography>
    <ProfileForm formik = {formik}></ProfileForm>
    </>
    )
}

export default Profile