import React from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';


const ProfileForm = ({formik}) => {
  const sessionObj = JSON.parse(localStorage.getItem('object'))

  return (
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
            <Select id="service" name="service" label="service" value={formik.values.service} onChange={formik.handleChange}>
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
          id = "phone"
          onChange={formik.handleChange}
          value={formik.values.phone} 
        />
        <br />
        <TextField
          style={{ width: "250px", margin: "5px" }}
          type="date"
          label="Date de naissance"
          id = "birthdate"
          onChange={formik.handleChange}
          value={formik.values.birthdate} 
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

        {sessionObj.user.isAdmin && 
        <FormControl variant="outlined" style={{ width: "250px", margin: "5px" }}>
            <InputLabel>Mode</InputLabel>
            <Select id="isAdmin" name="isAdmin" label="isAdmin" value={formik.values.isAdmin} onChange={formik.handleChange}>
                <MenuItem id="admin" value={true}>Admin</MenuItem>
                <MenuItem id="user" value={false}>Utilisateur</MenuItem>
            </Select>
        </FormControl>
        }
        <br />

        <Button type="submit" variant="contained" color="primary">
          Sauvgarder
        </Button>
      </form>
  )
}

export default ProfileForm