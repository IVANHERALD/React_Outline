import React, { useState, useEffect } from 'react';
import axios from "axios";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails, Stepper, Step, StepLabel, Button, Typography, TextField, FormControl, FormLabel, RadioGroup, FormControlLabel
} from '@mui/material';
import '../../src/component/Styles/RentNow.css';
import { ref, set, push, getDatabase } from "firebase/database";
import AddIcon from '@mui/icons-material/Add';
import Radio from '@mui/material/Radio';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { db } from './Firebase';
import { useAuthValue } from '../AuthContext';
import { FaLandmark } from 'react-icons/fa';

const steps = ['Step 1', 'Step 2', 'Step 3']; // Array of steps

const RentNow = () => {
  const [Name, setName] = useState('');
  const [MobileNo, setMobileNo] = useState('');
  const [Pincode, setPincode] = useState('');
  const [Locality1, setLocality1] = useState('');
  const [Address1, setAddress1] = useState('');
  const [Landmark, setLandmark] = useState('');
  const [AlternatePhoneno, setAlternatephoneno] = useState('');

  const { currentUser } = useAuthValue();
  const [displayName, setDisplayName] = useState(currentUser?.displayName || '');
  const [selectedValue, setSelectedValue] = useState('');
  const [showAddress, SetshowAddress] = useState(false);
  const DisplayAddress = () => {
    SetshowAddress(true);
  }
  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };
  useEffect(() => {
    setDisplayName(currentUser?.displayName || '');

  }, [currentUser]);
  const UserDetails = (event) => {
    event.preventDefault();
    console.log(Name, MobileNo, Pincode, Locality1, Address1, Landmark, AlternatePhoneno);
    const UserData = [{
      Name,
      MobileNo, Pincode, Locality1, Address1, Landmark, AlternatePhoneno
    }];

    set(ref(db, 'UserDetails'), UserData)
      .then(() => {
        console.log('Data saved successfully');
      })
      .catch((error) => {
        console.error('Error saving data:', error);
      });
  }
  return (
    <div>
      <div className='header1'>
        RentalBuddy
      </div>
      <Stepper alternativeLabel orientation='vertical' >
        <Step>
          <StepLabel> <div>
            Login<br />
            <TextField value={displayName} onChange={(e) => setDisplayName(e.target.value)} />
          </div></StepLabel>
        </Step>
        <Step>
          <StepLabel><div className='rental address'>
            <Button variant="contained" startIcon={<AddIcon />} onClick={DisplayAddress}>
              Add Address
            </Button>
            {showAddress && (
              <form >
                <TextField
                  label="Name"
                  value={Name}
                  onChange={(e) => setName(e.target.value)}
                  variant="outlined"
                  required
                />
                <TextField
                  label="10-digit Mobile number"
                  variant="outlined" value={MobileNo} onChange={(e) => setMobileNo(e.target.value)}
                  required
                /><br />
                <TextField
                  label="Pincode"
                  variant="outlined"
                  value={Pincode} onChange={(e) => setPincode(e.target.value)}
                  required
                />
                <TextField variant='outlined' value={Locality1} onChange={(e) => setLocality1(e.target.value)} label="Landmark"/>
                <br />
                <TextField
                  label="Address(Area and street)" value={Address1} onChange={(e) => setAddress1(e.target.value)}
                  variant="outlined"
                  required multiline rows={4} sx={{ width: '385px' }}

                /><br />
                <TextField
                  label="City"
                  variant="outlined"
                  required

                />
                <TextField
                  label="State"
                  variant="outlined"
                  required

                /><br />
                <TextField
                  label="Landmark(Optional)"
                  variant="outlined"
                  value={Landmark} onChange={(e) => setLandmark(e.target.value)}

                />
                <TextField
                  label="Alternate Phone(Optional)"
                  variant="outlined"
                  value={AlternatePhoneno} onChange={(e) => setAlternatephoneno(e.target.value)}

                /><br />
                
                <Button type="submit" variant="contained" color="primary" onClick={UserDetails}>
                  SAVE AND DELIVER HERE
                </Button>
                <Button variant='outlined'>CANCEL</Button>
              </form>
            )}
          </div></StepLabel>
        </Step>
      </Stepper>

      <div>



        <div className='payment options'>

          <div> <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel-content" id="panel-header">
              <Typography>UPI</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <RadioGroup value={selectedValue} onChange={handleChange}>
                <FormControlLabel value="option1" control={<Radio />} label="PhonePe" />
                <FormControlLabel value="option2" control={<Radio />} label="Your UPI ID" />

              </RadioGroup>
            </AccordionDetails>
          </Accordion></div>
          <div>
            <Accordion>
              <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel-content" id="panel-header">
                <Typography>Credit/Debit/ ATM Card</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <TextField variant='outlined' label='Enter Card Number'></TextField><br />
                <TextField variant='outlined' label='MM/YY' />
                <Button variant='outlined'>PAY</Button>
              </AccordionDetails>
            </Accordion>
          </div>

        </div>
      </div>

    </div>

  );

};

export default RentNow;
