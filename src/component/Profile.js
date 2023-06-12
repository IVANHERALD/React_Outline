import React from 'react'
import Footer from './Footer'
import { Search } from 'semantic-ui-react'
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import { useNavigate } from 'react-router-dom';
import './Profile.css';

function Profile() {
  const history=useNavigate();
  const handleClick=()=>{
    history('/');
  }
  return (
    <div className="profile">
      <div className='header'>
        <h2 className='heading_text'> Find Your Essentials</h2>
        <br/><br></br><Search/></div>
      
      <div className='Categories'>
        <div className='Category-1'>
         <CameraAltIcon sx={{fontSize:80}} onClick={handleClick}/>
        </div>
        <div className='Category-2'>
         <CameraAltIcon sx={{fontSize:80}}/>
        </div>
        <div className='Category-3'>
         <CameraAltIcon sx={{fontSize:80}}/>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Profile