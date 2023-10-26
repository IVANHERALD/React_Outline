import { React, useEffect, useState } from 'react'
import { Divider, Slide, Slider,Accordion,AccordionSummary,Typography,AccordionDetails } from '@mui/material'
import '../component/Styles/BuyCategory.css';
import { ref, onValue, query, equalTo, orderByChild, endAt, startAt } from 'firebase/database';
import { db } from './Firebase'
import { useParams,useNavigate } from 'react-router-dom';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


function BuyCatergory() {
  // const [value, setValue] = useState(0);

  // const handleSliderChange = (event, newValue) => {
  //   setValue(newValue);
  //   console.log(newValue);
  // };
  
  const [prodUnderCategory, setProd] = useState([]);
  const { passCategory } = useParams();
  const history = useNavigate();


  useEffect(() => {
    const prodRef = ref(db, 'product');
    const categoryQuery = query(prodRef);
    const fetchData = onValue(categoryQuery, (snapshot) => {
      const categoryData = snapshot.val();
      console.log(categoryData)
      if (categoryData) {
        
        const dataArray = Object.values(categoryData).filter((item) => item[0].category === passCategory);

        setProd(dataArray); 
      }
    });

    return () => {
      fetchData();
    };

  }, [passCategory]);


  useEffect(() => {
    console.log(prodUnderCategory);
  }, [prodUnderCategory]);

 const handleclick=(key)=>{
  console.log(key)
   history('/RentProductPage/'+key)
 }

  return (
    <div className='buyCategory'>
      {/* <div style={{width:'300px',display:'block'}}>
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
        </div> */}
      <div className='leftcolumn'>
        Filters<br/><Divider/>{passCategory}<Divider/><b>PRICE</b><br/><Slider min={0} max={30000} sx={{width:'200px'}}/><Divider/>

        <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
      
        >
          <Typography>BRAND</Typography>
        </AccordionSummary>
        <AccordionDetails>
          
        </AccordionDetails>
      </Accordion>
      </div>
      <div className='prodDetailsCatgeory'>
        <div className='prodDetails'>
          {prodUnderCategory.map((item, index) => (
            <div className="displayDetails" key={index}>
              <div className='display-buy'>
                <img className='image' src={item[0].newPhotos[0]}  alt='photos' onClick={()=>handleclick(item[0].productId)}></img>
              </div>
              <div className='otherDetails1'>
                <div className='input-containers'  onClick={()=>handleclick(item[0].productId)}>
                <h2>{item[0].adTitle}</h2>
                <h4>{item[0].description}</h4>
              </div>
              </div>
              <div className='otherDetails2'>
                <div className='input-containers2' onClick={()=>handleclick(item[0].productId)}>
                <h2>₹ {item[0].price}</h2>
              </div>
              </div>

            </div>))}
        </div>

      </div>
    </div>
  )
}

export default BuyCatergory