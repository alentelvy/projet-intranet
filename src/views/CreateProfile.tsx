import React from 'react'
import Typography from '@mui/material/Typography'
import Navbar from '../components/Navbar';
import { useFormik } from 'formik';
import {postData} from '../services/data';
import ProfileForm from '../components/ProfileForm';


const CreateProfile = () => {
  
    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            gender: '',
            firstname: '',
            lastname:'',
            city: '',
            country: '',
            email: '',
            birthdate: '', 
            password: '',
            phone:  '',
            photo: '',
            service: '',
            isAdmin: false
        },
        onSubmit: values => {
        // console.log(values)
        postData('collaborateurs', values)
        },
    }); 
  
    
    
    return (
      <>
      <Navbar></Navbar>
      <Typography variant="h5">Créer le profil de l''utilisateur</Typography>
      <ProfileForm formik = {formik} isAdmin = {true}></ProfileForm>
      </>
      )
}

export default CreateProfile