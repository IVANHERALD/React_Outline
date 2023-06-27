import React, { useState } from 'react';
import { Accordion,
    AccordionSummary,
    AccordionDetails, Stepper, Step, StepLabel, Button, Typography, TextField, FormControl, FormLabel, RadioGroup, FormControlLabel } from '@mui/material';
import '../../src/component/Styles/RentNow.css';
import AddIcon from '@mui/icons-material/Add';
import Radio from '@mui/material/Radio';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const steps = ['Step 1', 'Step 2', 'Step 3']; // Array of steps

const RentNow = () => {
    const [address, setAddress] = useState('');
    const [selectedValue, setSelectedValue] = useState('');

    const handleChange = (event) => {
      setSelectedValue(event.target.value);
    };
      
        const handleAddressChange = (event) => {
          setAddress(event.target.value);
        };
      
        const handleSubmit = (event) => {
          event.preventDefault();
          // Process the form data, e.g., submit to an API or update state
          console.log('Submitted address:', address);
          // Reset the form
          setAddress('');
        };
  const [activeStep, setActiveStep] = useState(0); // Active step index

  // Function to move to the next step
  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  // Function to move to the previous step
  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <div>
      <Stepper activeStep={activeStep} orientation="vertical">
        {steps.map((label, index) => (
          <Step key={index}>
            <StepLabel>
            </StepLabel>
          </Step>
        ))}
      </Stepper>

      <div>
        {activeStep === steps.length ? (
          <div>
            <Typography variant="subtitle1">
              
            </Typography>
            <Button onClick={() => setActiveStep(0)}>Reset</Button>
          </div>
        ) : (
          <div>
            <Typography variant="subtitle1">
              Step {activeStep + 1}
            </Typography>

            <Button
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={{ mr: 1 }}
            >
              Back
            </Button>

            <Button variant="contained" onClick={handleNext}>
              {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
            </Button>
          </div>
        )}
      </div>
      <div>
        <div className='header1'>
            RentalBuddy
        </div>
        <div>
            Login
            <TextField/>
        </div>
        <div className='rental address'>
        <Button variant="contained" startIcon={<AddIcon />} onClick={handleSubmit}>
        Add Address
      </Button>
      {address && (
        <form onSubmit={handleSubmit}>
          <TextField
            label="Address"
            value={address}
            onChange={handleAddressChange}
            variant="outlined"
            margin="normal"
            fullWidth
            required
          />
          <Button type="submit" variant="contained" color="primary">
            Save
          </Button>
        </form>
      )}
        </div>
        <div className='payment options'>
            <FormControl>
                <FormLabel>UPI</FormLabel>
                <RadioGroup><FormControlLabel control={<Radio/>}label="Phonepe"/>
                <FormControlLabel control={<Radio/>}label="Your UPI ID"/></RadioGroup>
            </FormControl>
            <div> <Accordion>
      <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel-content" id="panel-header">
        <Typography>Accordion Title</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <RadioGroup value={selectedValue} onChange={handleChange}>
          <FormControlLabel value="option1" control={<Radio />} label="Option 1" />
          <FormControlLabel value="option2" control={<Radio />} label="Option 2" />
          <FormControlLabel value="option3" control={<Radio />} label="Option 3" />
        </RadioGroup>
      </AccordionDetails>
    </Accordion></div>
        </div>
      </div>
    </div>
    
  );
 
};

export default RentNow;
