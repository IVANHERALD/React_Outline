import {React,useState} from 'react'
import { Slide, Slider } from '@mui/material'

function BuyCatergory() {
    const [value, setValue] = useState(0);

    const handleSliderChange = (event, newValue) => {
      setValue(newValue);
      console.log(newValue);
    };
  return (
    <div>
        <div style={{width:'300px',display:'block'}}>
            Filters<br/>
            BUDGET
            Choose a range below<br/>
            <span>0</span>
            <span>25000+</span>

            <Slider value={value} min={0} max={25000}  onChange={handleSliderChange}
            valueLabelDisplay='auto'
            defaultValue={5000} step={100}
            width='100px'/>
            <hr/>
            Brand




        </div>
    </div>
  )
}

export default BuyCatergory