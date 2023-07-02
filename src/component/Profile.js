import React,{useState,useEffect} from 'react'
import Footer from './Footer'
import { Search } from 'semantic-ui-react'
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import { useNavigate } from 'react-router-dom';
import './Styles/Profile.css';
import ChairIcon from '@mui/icons-material/Chair';
import { FaMobile, FaTools } from "react-icons/fa";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AddIcon from '@mui/icons-material/Add';
import { Grid, Button,Typography } from '@mui/material';
import CategoryPage from './CategoryPage';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import SportsCricketIcon from '@mui/icons-material/SportsCricket';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import TvIcon from '@mui/icons-material/Tv';


function Profile() {
  const history = useNavigate();
 

 //const prodRef=rootRef.child('product');

 const handleClick = (passCategory) => {
  history('/BuyCategory/' + passCategory);
}
  const AddIconfunction = () => {
    history('/RentCatergory');
  }


  return (
    <div className="profile">
      <div className='header'>
        <h2 className='heading_text'> Find Your Essentials</h2><span className='ShoppingCart'><Button variant="outlined" sx={{ color: '#030202', borderColor: '#030202' }} startIcon={<ShoppingCartIcon />}>Cart</Button></span>
        <span className='Rental'><Button variant="outlined" sx={{ color: '#030202', borderColor: '#030202' }} startIcon={<AddIcon />} onClick={AddIconfunction}>ADD</Button></span>
        <br /><br></br><Search />
        <h2>Categories</h2></div><br /><br /><br />

      <div className='Categories'>
        <Grid container spacing={1} direction="row"
          justifyContent="center"
          alignItems="center"
        >
          <Grid item md={1}>

            <div className='Category'>
              <CameraAltIcon sx={{ fontSize: 80 }} onClick={() => { handleClick('Camera') }} />
            </div>

          </Grid>

          <Grid item md={1}>

            <div className='Category'>
              <ChairIcon sx={{ fontSize: 80 }} onClick={() => { handleClick('Furniture') }}/>
            </div>

          </Grid>
          <Grid item md={1}>
            <div className='Category'>
              <FaTools style={{ fontSize: '65px' }} />
            </div>
          </Grid>
          <Grid item md={1}>
            <div className='Category'>
              <PhoneIphoneIcon style={{ fontSize: '65px' }} onClick={() => { handleClick('Mobiles') }}/>
              </div>
        </Grid>
              <Grid item md={1}>
            <div className='Category'>
              <Typography style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
              onClick={() => { handleClick('BSH') }}>
              <SportsCricketIcon style={{ fontSize: '40px' }} />
              <AutoStoriesIcon style={{fontSize:'40px'}}/>

              </Typography>
              </div>
              </Grid>
              <Grid item md={1}>
            <div className='Category'>
              <SportsEsportsIcon style={{ fontSize: '65px' }}  onClick={() => { handleClick('Gaming')}}/>
            </div>
          </Grid>
          <Grid item md={1}>
            <div className='Category'>
              <TvIcon style={{ fontSize: '65px' }}  onClick={() => { handleClick('Tv') }}/>
            </div>
          </Grid>
        </Grid>
      </div>
      <div className='recently-added'>
      <h3> Recently Added</h3>
      <CategoryPage/>

      
      </div>

      
    </div>
  )
}

export default Profile