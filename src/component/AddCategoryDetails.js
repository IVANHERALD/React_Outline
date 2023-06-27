import React, { useEffect, useState } from 'react'
import { useTheme } from '@mui/material/styles';
import { useFormik } from "formik";
import { Country, State, City } from "country-state-city";
import {db} from "./Firebase";
import{ref,set,push,getDatabase} from "firebase/database";
import {getStorage, ref as storageRef,uploadBytes} from "firebase/storage"
import { useParams } from 'react-router-dom';


import OutlinedInput from '@mui/material/OutlinedInput';
import './Styles/AddCategoryDetail.css'
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import UploadPhoto from './UploadPhoto'

import { Container, FormControl, InputLabel, MenuItem, TextField, FilledInput, Select, InputAdornment, Button, Box } from '@mui/material'
import { useAuthValue } from '../AuthContext';

const database = getDatabase();
const storage = getStorage();



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
  'Iphone',
  'Samsung',
  'Vivo',
  'Mi',
  'oppo',
  'Realme',
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
  'Sony'
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
  const { category } = useParams();
  const theme = useTheme();
  const [brandName, setBrandName] = React.useState([]);
  const [adTitle,setAdTitle]=useState('')
  const [description,setDescription]=useState('')
  const [price,setPrice]=useState('')
  const [countryCode, setcountryCode] = React.useState([]);
  const [stateCode, setstateCode] = React.useState([]);
  
  const [countryName, setCountryName] = useState('');
  const [stateName, setStateName] = useState('');
  const [cityName, setCityName] = React.useState('');
 
  const {currentUser}=useAuthValue();
  const {newPhotos}=useAuthValue();
  const [displayName, setDisplayName] = useState(currentUser?.displayName || '');
  const [email, setEmail] = useState(currentUser?.email || '');

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;

    setBrandName(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };
  useEffect(() => {
    setDisplayName(currentUser?.displayName || '');
    setEmail(currentUser?.email || '');
  }, [currentUser]);


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

  const handleClick=()=>{
    console.log(category,brandName,adTitle,description,price,newPhotos,countryCode,stateCode,cityName, currentUser.displayName,currentUser.email,countryName,stateName,cityName);
    const productId = push(ref(db, 'product')).key;
    const productref=ref(db,'product')
    const productData=[{
      category,
      brandName,
      adTitle,
      description,
      price,
      newPhotos,countryCode,stateCode,cityName,
      displayName:currentUser.displayName,
      email:currentUser.email
    }];
  set(ref(db,'product/'+productId), productData)
    .then(() => {
      console.log('Data saved successfully');
    })
    .catch((error) => {
      console.error('Error saving data:', error);
    });
  };

  
 

  // useEffect(() => {
  //   console.log(countryCode);
  //   console.log(State.getStatesOfCountry(countryCode))
  // }, [countryCode]);
  // useEffect(() => {
  //   console.log(stateCode);
  //   console.log(City.getCitiesOfState(countryCode,stateCode))
  // }, [stateCode]);
  useEffect(() => {
    if (countryCode) {
      const country = Country.getCountryByCode(countryCode);
      if (country) {
        console.log(country.name);
        setCountryName(country.name);
    }
  }
  }, [countryCode]);

  useEffect(() => {
    if (stateCode) {
      const state = State.getStateByCodeAndCountry(stateCode,countryCode );
      
    if (state) {
      console.log(state.name);
      setStateName(state.name);
    }
  }
  }, [stateCode]);

  // useEffect(() => {
  //   if (countryCode && stateCode && cityCode) {
  //     const city = City.getCityByCode(countryCode, stateCode, cityCode);
  //     console.log(cityCode);
  //     // if (city) {
  //     // setCityName(city.name);}
  //   }
  // }, [countryCode, stateCode, cityCode]);


  return (
    <div className='AddCategoryDetails'>
      <Container maxWidth="sm" sx={{ border: 2 }}>
        <div className='header'>
          SELECTED CATEGORY - {category}
        </div>
        <hr style={{ width: '572px' }}></hr>
        <div>
          <h2>INCLUDE SOME DETAILS</h2>

        </div>
        <div className='Form'>
          <Box sx={{ '& .MuiTextField-root': { m: 2 }, '& .MuiSelect-root': { m: 2 } }}>
          
          {category==='Mobiles'?
            <FormControl sx={{  minWidth: 415 }}>
            <InputLabel>Brand</InputLabel>
            <Select
              label="Brand"
              value={brandName}
              onChange={handleChange}
              input={<OutlinedInput label="Name" />}
              MenuProps={MenuProps}
            >
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
            </FormControl>
          :null}

            <FormControl sx={{ m: 4, minWidth: 450 }}>
              <TextField variant='outlined' label='Ad Title' value={adTitle} onChange={(e)=>setAdTitle(e.target.value)}/>
              <TextField variant='outlined' multiline label='Description' rows={6} value={description} onChange={(e)=>setDescription(e.target.value)}>
                Description
              </TextField>
            </FormControl>
          </Box>
        </div>
        <hr />
        <div className='Form'>
          <FormControl sx={{ m: 1, minWidth: 450 }}>
            SET A PRICE

            <TextField variant='outlined' InputProps={{ startAdornment: (<InputAdornment position='start'><CurrencyRupeeIcon /></InputAdornment>) }} value={price} onChange={(e)=>setPrice(e.target.value)}></TextField>
          </FormControl>
        </div>
        <hr />
        <span>UPLOAD UP TO 12 PHOTOS  <br/>
          <span> <UploadPhoto /></span></span><hr />
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

          <InputLabel>Country</InputLabel>
          <Select label="State"
                value={stateCode}
                onChange={(e)=> {setstateCode(e.target.value) }}
                MenuProps={MenuProps}>
                {State.getStatesOfCountry(countryCode).map(({name,isoCode})=> (
                  <MenuItem key={isoCode} value={isoCode}> {name} </MenuItem>
                ))}
          </Select>

          <Select label="City"
                value={cityName}
                onChange={(e)=> {setCityName(e.target.value) }}
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
            <TextField variant='outlined' label='Name' value={displayName} onChange={(e) => setDisplayName(e.target.value)}></TextField>
            <TextField variant='outlined' label='email'value={email} onChange={(e) => setEmail(e.target.value)}></TextField>
            
          </FormControl>
        </div>
        <hr />
        <div className='Form'>
          <FormControl sx={{ m: 1, minWidth: 450 }}>
            <Button variant='outlined' sx={{ width: 'auto' }} onClick={handleClick}>Post now</Button>
          </FormControl>
        </div>
      </Container>
    </div>
  )
}

export default AddCategoryDetails