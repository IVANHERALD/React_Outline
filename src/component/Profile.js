import React from 'react'
import Footer from './Footer'
import { Search } from 'semantic-ui-react'
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import { useNavigate } from 'react-router-dom';
import './Profile.css';
import { Grid } from '@mui/material';
function Profile() {
  const history=useNavigate();
  const handleClick=()=>{
    history('/');
  }
  return (
    <div>
      <Search/><br/><br></br>
      <div className='Categories'>
        <Grid container spacing={3} direction="row"
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
         <CameraAltIcon sx={{fontSize:80}}/>
        </div>
      
        </Grid>
        <Grid item md={4}>
        <div className='Category-3'>
         <CameraAltIcon sx={{fontSize:80}}/>
        </div>
        </Grid>
        </Grid>
      </div>
      <Footer/>
    </div>
  )
}

export default Profile