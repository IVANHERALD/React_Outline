import React from 'react'
import Footer from './Footer'
import { Search } from 'semantic-ui-react'
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import { useNavigate } from 'react-router-dom';
import './Styles/Profile.css';
import ChairIcon from '@mui/icons-material/Chair';
import { FaMobile,FaTools } from "react-icons/fa";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AddIcon from '@mui/icons-material/Add';


import { Grid,Button } from '@mui/material';

function Profile() {
  const history=useNavigate();
  const handleClick=()=>{
    history('/');
  }
  const AddIconfunction=()=>{
    history('/RentCatergory');
  }
  return (
    <div className="profile">
      <div className='header'>
        <h2 className='heading_text'> Find Your Essentials</h2><span className='ShoppingCart'><Button variant="outlined"sx={{color:'#030202',borderColor:'#030202'}} startIcon={<ShoppingCartIcon />}>Cart</Button></span>
        <span className='Rental'><Button variant="outlined" sx={{color:'#030202',borderColor:'#030202'}} startIcon={<AddIcon/> } onClick={AddIconfunction}>ADD</Button></span>
        <br/><br></br><Search/>
        <h2>Categories</h2></div><br/><br/><br/>
      
      <div className='Categories'>
        <Grid container spacing={5} direction="row"
        justifyContent="center"
        alignItems="center"
        >
          <Grid item md={4}>
            
        <div className='Category-1'>
         <CameraAltIcon sx={{fontSize:80}} onClick={handleClick}/>
        </div>
      
        </Grid>
      
          <Grid item md={4}>
            
        <div className='Category-2'>
         <ChairIcon sx={{fontSize:80}}/>
        </div>
      
        </Grid>
        <Grid item md={4}>
        <div className='Category-3'>
         <FaTools style={{fontSize:'65px'}}/>
        </div>
        </Grid>
        </Grid>
      </div>
      <Footer/>
    </div>
  )
}

export default Profile