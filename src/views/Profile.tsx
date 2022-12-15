import React, { useEffect, useState } from 'react'
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Navbar from '../components/Navbar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import { useFormik } from 'formik';
import axios from "axios";


const Profile = () => {
    const sessionObj = JSON.parse(localStorage.getItem('object'))
    console.log(sessionObj.user)
const [data, setData] = useState([]);
  //let { id } = useParams();
  const baseURL = `http://localhost:9000/api/collaborateurs/${sessionObj.user.id}`;
  console.log(baseURL)
  const [isSubmitting, setIsSubmitting] = useState(false)

//   useEffect(() => {
//     console.log("render")
//     const getData = async () => {
//       const { data } = await axios.get(baseURL);
//       setData(data);
//     };
  
//     getData();
//   }, [isSubmitting]);


  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
          gender: sessionObj.user.gender,
          firstname: sessionObj.user.firstname, 
          lastname: sessionObj.user.lastname, 
          city: sessionObj.user.city, 
          country: sessionObj.user.country, 
          email: sessionObj.user.email, 
          birthDate: sessionObj.user.birthdate, 
          password: '',
          phoneNumber: sessionObj.user.phone, 
          photo: '',
          category: sessionObj.user.service
          
      },
    onSubmit: values => {
       axios({
        method: 'PUT',
        url: baseURL,
        data: values
      })
        .then((res) => {
          console.log("submitted", res)
          alert("successfully edited")
          setIsSubmitting(!isSubmitting)
        })
        .catch((error) =>{
           console.log(error)
      });
     },
  });

    // const formik = useFormik({
    //     initialValues: {
    //       sex: '',
    //       name: '', 
    //       surname: '',
    //       city: '', 
    //       country: '',
    //       email: '',
    //       birthDate: '', 
    //       password: '',
    //       phoneNumber: '', 
    //       photo: '',
    //       category: '',
          
    //   },
    //     onSubmit: values => {
    //        console.log(values)
    //      },
    
    //   });
  
  return (
    <>
    <Navbar></Navbar>
    <Typography variant="h5">Modifier mon profil</Typography>
    <form onSubmit={formik.handleSubmit}>

        <FormControl variant="outlined" style={{ width: "250px", margin: "5px" }}>
            <InputLabel>Civilité</InputLabel>
            <Select id = "gender" name = "gender"  label="civilite" value={formik.values.gender}  onChange={formik.handleChange}>
                <MenuItem id = "male" value="male">Homme</MenuItem>
                <MenuItem id = "female" value="female">Femme</MenuItem>
            </Select>
        </FormControl>    
        <br />

        <FormControl variant="outlined" style={{ width: "250px", margin: "5px" }}>
            <InputLabel>Catégorie</InputLabel>
            <Select id="category" name="category" label="category" value={formik.values.category} onChange={formik.handleChange}>
                <MenuItem id="client" value="Client" >Client</MenuItem>
                <MenuItem id="marketing" value='Marketing'>Marketing</MenuItem>
                <MenuItem id="technique" value="Technique" >Technique</MenuItem>
            </Select>
        </FormControl>
        <br />

        <TextField
          style={{ width: "250px", margin: "5px" }}
          type="text"
          label="Prenom"
          id = "firstname"
          onChange={formik.handleChange}
          value={formik.values.firstname} 
        />
        <br />

        <TextField
          style={{ width: "250px", margin: "5px" }}
          type="text"
          label="Nom"
          id = "lastname"
          onChange={formik.handleChange}
          value={formik.values.lastname} 
        />
        <br />

        <TextField
          style={{ width: "250px", margin: "5px" }}
          type="email"
          label="Email"
          id = "email"
          onChange={formik.handleChange}
          value={formik.values.email} 
        />
        <br />
        <TextField
          style={{ width: "250px", margin: "5px" }}
          type="password"
          label="Mot de passe"
          id = "password"
          onChange={formik.handleChange}
          value={formik.values.password} 
          inputProps={{ minLength: 8 }}
        />
        <br />
        <TextField
          style={{ width: "250px", margin: "5px" }}
          type="password"
          label="Confirmation"
          id = "password"
          onChange={formik.handleChange}
          value={formik.values.password} 
          inputProps={{ minLength: 8 }}
        />
        <br />
        <TextField
          style={{ width: "250px", margin: "5px" }}
          type="tel"
          label="Téléphone"
          id = "phoneNumber"
          onChange={formik.handleChange}
          value={formik.values.phoneNumber} 
        />
        <br />
        <TextField
          style={{ width: "250px", margin: "5px" }}
          type="date"
          label="Date de naissance"
          id = "birthDate"
          onChange={formik.handleChange}
          value={formik.values.birthDate} 
        />
        <br />
        <TextField
          style={{ width: "250px", margin: "5px" }}
          type="text"
          label="Ville"
          id = "city"
          onChange={formik.handleChange}
          value={formik.values.city} 
        />
        <br />
        <TextField
          style={{ width: "250px", margin: "5px" }}
          type="text"
          label="Pays"
          id = "country"
          onChange={formik.handleChange}
          value={formik.values.country} 
        />
        <br />
        <TextField
          style={{ width: "250px", margin: "5px" }}
          type="text"
          label="Photo"
          id = "photo"
          onChange={formik.handleChange}
          value={formik.values.firstname} 
        />
        <br />
        <Button type="submit" variant="contained" color="primary">
          Sauvgarder
        </Button>
      </form>
    </>
    )
}

export default Profile