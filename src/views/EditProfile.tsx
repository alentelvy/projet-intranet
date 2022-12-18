import React, { useState, useEffect } from 'react'
import Typography from '@mui/material/Typography'
import Navbar from '../components/Navbar';
import { useFormik } from 'formik';
import {putData} from '../services/data';
import ProfileForm from '../components/ProfileForm';
import { useParams } from 'react-router-dom';
import {getData} from '../services/data';
import { useNavigate } from 'react-router-dom';


const EditProfile = () => {


  let { id } = useParams();
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  //fetch user data to edit 
  useEffect(() => {
      getData(`collaborateurs/${id}`)
      .then((data) => {
        setUser(data) 
      });
    }, []);


    //use default values for form 
    const formik = useFormik({
        enableReinitialize: true,
        initialValues: 
        
        {
              gender: user ? user.gender : '',
              firstname: user ? user.firstname : '',
              lastname:user ? user.lastname  : '',
              city: user ? user.city  : '',
              country: user ? user.country: '',
              email: user ? user.email: '',
              birthdate: user ? user.birthdate : '', 
              password: '',
              phone: user ? user.phone : '',
              photo: user ? user.photo : '',
              service: user ?  user.service: '', 
              isAdmin: user ?  (user.isAdmin? true: false) : false
              
          },
        onSubmit: values => {
          putData(`collaborateurs/${id}`, values)
          .then(() => {
            navigate("/users");
          })
          .catch((e) => {
            return (<div> error </div>)
          })
         },
      }); 

  
  
  return (
    <>
    <Navbar></Navbar>
    <Typography variant="h5">Modifier le profil de l''utilisateur</Typography>
    {
        user ? <ProfileForm formik = {formik}></ProfileForm>
        : 
        <div>Loading</div>
    }
    </>
    )
}

export default EditProfile