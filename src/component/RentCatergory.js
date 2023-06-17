import { Collapse, List, ListItemButton, ListSubheader } from '@mui/material'
import React from 'react'
import ListItemText from '@mui/material/ListItemText';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
function RentCatergory() {
    const [openElectronics, setOpenElectronics] = React.useState(false);
    const handleClickElectronics =()=>{
        setOpenElectronics(!openElectronics);
    }



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
                    <ListItemText primary="Tv"/>
                </ListItemButton>
                <ListItemButton>
                    <ListItemText primary="AC"/>
                </ListItemButton>
                <ListItemButton>
                    <ListItemText primary="Camera"/>
                </ListItemButton>
                <ListItemButton>
                    <ListItemText primary="Gaming"/>
                </ListItemButton>
            </List>
         </Collapse>




        <ListItemButton >
            <ListItemText primary="Furniture"/>
        </ListItemButton>
        
        <ListItemButton>
            <ListItemText primary="Books, Sports& Hobbies "/>
        </ListItemButton>
 
         








         </List>
         </center>
        </div>
    </div>
  )
}

export default RentCatergory