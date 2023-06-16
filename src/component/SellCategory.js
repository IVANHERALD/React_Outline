import { Collapse, List, ListItemButton, ListSubheader } from '@mui/material'
import React, { useEffect, useState } from 'react'
import ListItemText from '@mui/material/ListItemText';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import { useForm } from "react-hook-form";
import { FormControl, InputLabel, MenuItem, Select, Button } from "@mui/material";

function SellCategory() {
    const [openElectronics, setOpenElectronics] = React.useState(false);
    const handleClickElectronics =()=>{
        setOpenElectronics(!openElectronics);
    }
 
    const [countries, setCountries] = useState([]);
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors }
  } = useForm();

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await fetch("API_ENDPOINT_TO_FETCH_COUNTRIES");
        const data = await response.json();
        setCountries(data);
      } catch (error) {
        console.error("Error fetching countries:", error);
      }
    };

    fetchCountries();
  }, []);

  const handleCountryChange = async (selectedCountry) => {
    setValue("country", selectedCountry);
    setValue("state", "");
    setValue("city", "");

    try {
      const response = await fetch(
        `API_ENDPOINT_TO_FETCH_STATES/${selectedCountry.id}`
      );
      const data = await response.json();
      setStates(data);
    } catch (error) {
      console.error("Error fetching states:", error);
    }
  };

  const handleStateChange = async (selectedState) => {
    setValue("state", selectedState);
    setValue("city", "");

    try {
      const response = await fetch(
        `API_ENDPOINT_TO_FETCH_CITIES/${selectedState.id}`
      );
      const data = await response.json();
      setCities(data);
    } catch (error) {
      console.error("Error fetching cities:", error);
    }
  };

  const onSubmit = (data) => {
    console.log(data);
  };
    

  return (
    <div className="sellCategory">
        <div className="upperHeader">
           <h3> POST YOUR PRODUCTS </h3>
        </div>
        <div className="prodCategory">
            <center>
         <List
         sx={{maxWidth:450, width:'100%'}}
         subheader={
            <ListSubheader>Choose a category</ListSubheader>
         }>
        <ListItemButton>
            <ListItemText primary="Mobiles"/>
        </ListItemButton>
        <ListItemButton onClick={handleClickElectronics}>
            <ListItemText primary="Electronics"/>
            {openElectronics ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        
        <Collapse in={openElectronics} timeout="auto" unmountOnExit>
            <List>
                <ListItemButton>
                    <ListItemText primary="electronics 1"/>
                </ListItemButton>
                <ListItemButton>
                    <ListItemText primary="electronics 2"/>
                </ListItemButton>
                <ListItemButton>
                    <ListItemText primary="electronics 3"/>
                </ListItemButton>
                <ListItemButton>
                    <ListItemText primary="electronics 4"/>
                </ListItemButton>
            </List>
         </Collapse>




        <ListItemButton >
            <ListItemText primary="Furniture"/>
        </ListItemButton>
        <ListItemButton>
            <ListItemText primary="Books" />
        </ListItemButton>
        <ListItemButton>
            <ListItemText primary="Commercial Vehicles and spares"/>
        </ListItemButton>
 
         








         </List>
         </center>




















        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
        <FormControl>
          <InputLabel id="country-label">Country</InputLabel>
          <Select
            labelId="country-label"
            id="country"
            {...register("country")}
            onChange={(e) => handleCountryChange(e.target.value)}
            error={errors.country}
          >
            {countries.map((country) => (
              <MenuItem key={country.id} value={country}>
                {country.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <FormControl>
          <InputLabel id="state-label">State</InputLabel>
          <Select
            labelId="state-label"
            id="state"
            {...register("state")}
            onChange={(e) => handleStateChange(e.target.value)}
            error={errors.state}
          >
            {states.map((state) => (
              <MenuItem key={state.id} value={state}>
                {state.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <FormControl>
          <InputLabel id="city-label">City</InputLabel>
          <Select
            labelId="city-label"
            id="city"
            {...register("city")}
            error={errors.city}
          >
            {cities.map((city) => (
              <MenuItem key={city.id} value={city}>
                {city.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <Button variant="contained" color="primary" type="submit">
          Submit
        </Button>
      </form>
    </div>
  )
}

export default SellCategory