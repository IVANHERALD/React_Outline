import React from 'react'
import { useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import './Styles/AddCategoryDetail.css'
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';

import {Container, FormControl, InputLabel, Select,MenuItem, TextField,FilledInput,InputAdornment,Button, Box } from '@mui/material'
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
   <b>Popular Brand</b> ,
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
  function getStyles(name, personName, theme) {
    return {
      fontWeight:
        personName.indexOf(name) === -1
          ? theme.typography.fontWeightRegular
          : theme.typography.fontWeightMedium,
    };
  }
  

function AddCategoryDetails() {
    const theme = useTheme();
  const [personName, setPersonName] = React.useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };
  
  return (
    <div className='AddCategoryDetails'>
        <Container maxWidth="sm" sx={{border:2}}>
        <div className='header'>
            SELECTED CATEGORY
        </div>
        <hr style={{width:'572px'}}></hr>
        <div>
            <h2>INCLUDE SOME DETAILS</h2>

        </div>
        <div className='Form'>
            <Box sx={{  '& .MuiTextField-root': { m: 2 }, '& .MuiSelect-root': { m: 2 }}}>
            <FormControl sx={{m:4,minWidth:450}}>
                <InputLabel>Brand</InputLabel>
            <Select label="Brand"  value={personName}
          onChange={handleChange}
          input={<OutlinedInput label="Name" />}
          MenuProps={MenuProps}>
                  {Brand.map((name) => (
            <MenuItem
              key={name}
              value={name}
              style={getStyles(name, personName, theme)}
            >
              {name}
            </MenuItem>
          ))}
        </Select>
                

               


            
           <TextField variant='outlined' label='Ad Title'/>
           <TextField variant='outlined' multiline label='Description' rows={6}>
            Description
           </TextField>
           </FormControl>
           </Box>
        </div>
        <hr/>
        <div className='Form'>
        <FormControl sx={{m:1,minWidth:450}}>
            SET A PRICE
         
          <TextField variant='outlined' InputProps={{startAdornment:(<InputAdornment position='start'><CurrencyRupeeIcon/></InputAdornment>)}}></TextField>
          </FormControl>
          </div>
          <hr/>
          <div>UPLOAD UP TO 12 PHOTOS</div><hr/>
          <div className='Form'>
          <FormControl sx={{m:1,minWidth:450}}>
            CONFIRM YOUR LOCATION<br/>
            <Select label='State' sx={{width:'450px'}}></Select>
            </FormControl>
          </div>
          <hr/>
          <div className='Form'>
          <FormControl sx={{m:1,minWidth:450}}>
            REVIEW YOUR DETAILS<br/>
            <TextField variant='outlined' label='Name'></TextField>
            </FormControl>
          </div>
          <hr/>
          <div className='Form'>
          <FormControl sx={{m:1,minWidth:450}}>
            <Button variant='outlined' sx={{width:'auto'}}>Post now</Button>
            </FormControl>
          </div>
          </Container>
    </div>
  )
}

export default AddCategoryDetails