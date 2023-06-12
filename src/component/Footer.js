import React from 'react'
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import LoginRoundedIcon from '@mui/icons-material/LoginRounded';
import ContactSupportRoundedIcon from '@mui/icons-material/ContactSupportRounded';
import Paper from '@mui/material/Paper';
import SearchIcon from '@mui/icons-material/Search';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import SettingsIcon from '@mui/icons-material/Settings';

function Footer() {
  return (
    <div  className='App'>
      <footer>
    <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3} style={{zIndex:99}}>
    
      <BottomNavigation  showLabels>
       
        <BottomNavigationAction label="Home" icon={<HomeRoundedIcon style={{color:"#d9dbde"}}/>}/>
        <BottomNavigationAction label="Search" icon={<SearchIcon style={{color:"#d9dbde"}}/>}/>
        <BottomNavigationAction label="Favourite" icon={<FavoriteIcon style={{color:"#d9dbde"}}/>}/>
        <BottomNavigationAction label="Chat" icon={<ChatBubbleIcon style={{color:"#d9dbde"}}/>}/>
        <BottomNavigationAction label="Settings" icon={<SettingsIcon style={{color:"#d9dbde"}}/>}/>
     
        </BottomNavigation>
        
        </Paper>
      
    </footer>
        </div>
  )
}

export default Footer