import { Collapse, List, ListItemButton, ListSubheader } from '@mui/material'
import React from 'react'
import ListItemText from '@mui/material/ListItemText';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import {useAuthValue} from '../AuthContext'
import {useNavigate} from 'react-router-dom';

function RentCatergory() {

    const [openElectronics, setOpenElectronics] = React.useState(false);
    const {setSelectedCategory}=useAuthValue();

    const history=useNavigate();

    const handleClickElectronics =()=>{
        setOpenElectronics(!openElectronics);
    }

    const handleCategorySelection = (category) => {
        setSelectedCategory(category);
        history('/AddCategoryDetails')

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
        <ListItemButton onClick={() => handleCategorySelection('Mobiles')}>
            <ListItemText primary="Mobiles"/>
        </ListItemButton>
        <ListItemButton onClick={handleClickElectronics}>
            <ListItemText primary="Electronics"/>
            {openElectronics ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        
        
        <Collapse in={openElectronics} timeout="auto" unmountOnExit>
            <List>
                <ListItemButton onClick={() => handleCategorySelection('Tv')}>
                    <ListItemText primary="Tv"/>
                </ListItemButton>
                <ListItemButton onClick={() => handleCategorySelection('AC')}>
                    <ListItemText primary="AC"/>
                </ListItemButton>
                <ListItemButton onClick={() => handleCategorySelection('Camera')}>
                    <ListItemText primary="Camera"/>
                </ListItemButton>
                <ListItemButton onClick={() => handleCategorySelection('Gaming')}>
                    <ListItemText primary="Gaming"/>
                </ListItemButton>
            </List>
         </Collapse>




        <ListItemButton onClick={() => handleCategorySelection('Furniture')}>
            <ListItemText primary="Furniture"/>
        </ListItemButton>
        
        <ListItemButton onClick={() => handleCategorySelection('BSH')}>
            <ListItemText primary="Books,Sports & Hobbies "/>
        </ListItemButton>
 
         








         </List>
         </center>
        </div>
    </div>
  )
}

export default RentCatergory