import React,{useState,useEffect} from 'react'
import {ref,onValue} from 'firebase/database';
import {db} from './Firebase'
import './Styles/CategoryPage.css'
import { useNavigate } from 'react-router';
import { object } from 'prop-types';

function CategoryPage() {
    const history=useNavigate();
    const handleclick1=(productId)=>{
        console.log(productId);

        history('/RentProductPage/'+productId);
      }
    const [productKeys, setProductKeys] = useState([]);
    const [recentyAdded,setRecentlyAdded]=useState([]);
    const prodRef = ref(db, 'product');
    useEffect(()=> {
    onValue(prodRef, (snapshot) => {
      const data = snapshot.val();
      const recentlyAddedData = Object.values(data);
     setRecentlyAdded(recentlyAddedData);
     console.log(Object.keys(data));
     setProductKeys(Object.keys(data));
  
    });
  },[]);

  useEffect(() => {
    console.log(recentyAdded);
  }, [recentyAdded]);

  return (
    <div className='image-container'>
        {recentyAdded.map((item, index) => (
      <div key={index}>
      <div className='display-buy'>
       <img className='image' src={item[0].newPhotos[0]} onClick={()=>handleclick1(productKeys[index])}></img>
        <br></br>
      <b className='price'> ₹ {item[0].price}</b> <br/>
        {item[0].description}
        

    </div>
    
     </div>
      ))} </div>
  )
}

export default CategoryPage
