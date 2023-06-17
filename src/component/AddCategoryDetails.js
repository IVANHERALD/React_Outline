import React, { useEffect } from 'react'
import { useTheme } from '@mui/material/styles';
import { useFormik } from "formik";
import { Country, State, City } from "country-state-city";


import OutlinedInput from '@mui/material/OutlinedInput';
import './Styles/AddCategoryDetail.css'
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import UploadPhoto from './UploadPhoto'

import { Container, FormControl, InputLabel, MenuItem, TextField, FilledInput, Select, InputAdornment, Button, Box } from '@mui/material'
import { getAllStates } from 'country-state-city/lib/state';


const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};
const Brand = [
  <b>Popular Brand</b>,
  'Iphone',
  'Samsung',
  'Vivo',
  'Mi',
  'oppo',
  'Realme',
  <b>All Brand</b>,
  'Asus',
  'Google pixel',
  'HTC',
  'Samsung',
  'Iphone',
  'Mi',
  'Vivo',
  'Oneplus',
  'Oppo',
  'Realme',
  'Sony',



];
function getStyles(name, brandName, theme) {
  return {
    fontWeight:
      brandName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

function AddCategoryDetails() {
  const theme = useTheme();
  const [brandName, setBrandName] = React.useState([]);

  const [countryCode, setcountryCode] = React.useState([]);
  const [stateCode, setstateCode] = React.useState([]);
  const [cityCode, setCityCode] = React.useState([]);
  


  const handleChange = (event) => {
    const {
      target: { value },
    } = event;

    setBrandName(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };


  const addressFromik = useFormik({
    initialValues: {
      country: "India",
      state: null,
      city: null
    },
    onSubmit: (values) => console.log(JSON.stringify(values))
  });

  const countries = Country.getAllCountries();
  

  

  const { values, handleSubmit, setFieldValue, setValues } = addressFromik;

  useEffect(() => { }, [values]);




  // useEffect(() => {
  //   console.log(countryCode);
  //   console.log(State.getStatesOfCountry(countryCode))
  // }, [countryCode]);
  // useEffect(() => {
  //   console.log(stateCode);
  //   console.log(City.getCitiesOfState(countryCode,stateCode))
  // }, [stateCode]);

  return (
    <div className='AddCategoryDetails'>
      <Container maxWidth="sm" sx={{ border: 2 }}>
        <div className='header'>
          SELECTED CATEGORY
        </div>
        <hr style={{ width: '572px' }}></hr>
        <div>
          <h2>INCLUDE SOME DETAILS</h2>

        </div>
        <div className='Form'>
          <Box sx={{ '& .MuiTextField-root': { m: 2 }, '& .MuiSelect-root': { m: 2 } }}>
            <FormControl sx={{ m: 4, minWidth: 450 }}>
              <InputLabel>Brand</InputLabel>
              <Select label="Brand"
                value={brandName}
                onChange={handleChange}
                input={<OutlinedInput label="Name" />}
                MenuProps={MenuProps}>
                
                {Brand.map((name) => (
                  <MenuItem
                    key={name}
                    value={name}
                    style={getStyles(name, brandName, theme)}
                  >
                    {name}
                  </MenuItem>
                ))}
              </Select>






              <TextField variant='outlined' label='Ad Title' />
              <TextField variant='outlined' multiline label='Description' rows={6}>
                Description
              </TextField>
            </FormControl>
          </Box>
        </div>
        <hr />
        <div className='Form'>
          <FormControl sx={{ m: 1, minWidth: 450 }}>
            SET A PRICE

            <TextField variant='outlined' InputProps={{ startAdornment: (<InputAdornment position='start'><CurrencyRupeeIcon /></InputAdornment>) }}></TextField>
          </FormControl>
        </div>
        <hr />
        <span>UPLOAD UP TO 12 PHOTOS
          <span> <UploadPhoto /><UploadPhoto /></span></span><hr />
        <div className='Form'>
          <FormControl sx={{ m: 1, minWidth: 450 }}>
            CONFIRM YOUR LOCATION<br />
            <InputLabel>Country</InputLabel>
            <Select label="Country"
                value={countryCode}
                onChange={(e)=> {setcountryCode(e.target.value) }}
                MenuProps={MenuProps}>
                {countries.map(({name,isoCode}) => (
                  <MenuItem key={isoCode} value={isoCode}> {name},{isoCode} </MenuItem>
                ))}
          </Select>


          <Select label="State"
                value={stateCode}
                onChange={(e)=> {setstateCode(e.target.value) }}
                MenuProps={MenuProps}>
                {State.getStatesOfCountry(countryCode).map(({name,isoCode})=> (
                  <MenuItem key={isoCode} value={isoCode}> {name} </MenuItem>
                ))}
          </Select>

          <Select label="City"
                value={cityCode}
                onChange={(e)=> {setCityCode(e.target.value) }}
                MenuProps={MenuProps}>
                {City.getCitiesOfState(countryCode,stateCode).map(({name})=> (
                  <MenuItem key={name} value={name}> {name} </MenuItem>
                ))}
          </Select>

          </FormControl>
        </div>
        <hr />
        <div className='Form'>
          <FormControl sx={{ m: 1, minWidth: 450 }}>
            REVIEW YOUR DETAILS<br />
            <TextField variant='outlined' label='Name'></TextField>
          </FormControl>
        </div>
        <hr />
        <div className='Form'>
          <FormControl sx={{ m: 1, minWidth: 450 }}>


          

            <Button variant='outlined' sx={{ width: 'auto' }} >Post now</Button>
          </FormControl>
        </div>
      </Container>
    </div>
  )
}

export default AddCategoryDetails