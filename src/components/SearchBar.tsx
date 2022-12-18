import React  from 'react';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';


const SearchBar = ({formik}) => {
  return (
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
            id="place" 
            label="Localisation" 
            variant="outlined"
            onChange={formik.handleChange}
            value={formik.values.place} 
          />
        
        <FormControl variant="outlined" style={{ width: "200px", margin: "10px" }}>
            <InputLabel>Catégorie</InputLabel>
            <Select id="service" name="service" label="service" value={formik.values.service} onChange={formik.handleChange}>
                <MenuItem id="client" value="client" >Client</MenuItem>
                <MenuItem id="marketing" value='marketing'>Marketing</MenuItem>
                <MenuItem id="technique" value="technique" >Technique</MenuItem>
            </Select>
        </FormControl>

          <Button type="submit" variant="contained" style={{margin: '10px', height: "100%"}}> Chercher </Button>
        
      </Grid>
    </form>
  )
}

export default SearchBar