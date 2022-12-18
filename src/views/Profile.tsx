import React  from 'react'
import Typography from '@mui/material/Typography'
import Navbar from '../components/Navbar';
import { useFormik } from 'formik';

import {putData} from '../services/data';
import ProfileForm from '../components/ProfileForm';
import { useSelector} from 'react-redux'



const Profile = () => {

  //get user data from store 
  const {  user } = useSelector((state) => state.auth);

  //edit personal data 
  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
          gender: user ? user.user.gender : '',
          firstname: user ? user.user.firstname : '',
          lastname: user ? user.user.lastname : '',
          city: user ? user.user.city : '',
          country: user ? user.user.country : '',
          email: user ? user.user.email : '',
          birthdate: user ? user.user.birthdate : '',
          password: '',
          phone: user ? user.user.phone : '',
          photo: user ? user.user.photo : '',
          service: user ? user.user.service : '',
          isAdmin: user ? (user.user.isAdmin ? true : false): '',
          
      },
    onSubmit: values => {
      putData(`collaborateurs/${user.user.id}`, values)
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