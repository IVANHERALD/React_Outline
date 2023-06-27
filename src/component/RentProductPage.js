import React, { useEffect, useState } from 'react';
import { db } from './Firebase';
import { onValue, ref } from 'firebase/database';
import { useParams } from 'react-router';
import ReactImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';
import { Button, Divider } from '@mui/material';

import { Height } from '@mui/icons-material';
import './Styles/RentProductPage.css'

const RentProductPage = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [sliderImages, setSliderImages] = useState([]);

  useEffect(() => {
    const productRef = ref(db, `product/${productId}`);
    onValue(productRef, (snapshot) => {
      const data = snapshot.val();
      setProduct(data);
    });
  }, [productId]);

  useEffect(() => {
    if (product && product[0].newPhotos) {
      const images = product[0].newPhotos.map((image) => ({
        original: image,
        thumbnail: image,
        originalHeight: 300,
        originalWidth: 800,
        thumbnailHeight: 80,
        thumbnailWidth: 100,
      }));
      setSliderImages(images);
    }
  }, [product]);
  

  return (
    <div className='container'>
      
        <div className='img' >
          
        <ReactImageGallery items={sliderImages} itemClass="custom"/> 
        
        </div>
       <div className='Details'>
          <b>Details</b>
          <h3>Brand:</h3> 
        {product && <p>{product[0].brandName}</p>}
        <Divider variant="middle" sx={{borderBottom:'2px solid black'}} />
        
        Description<br/>
        {product && <p>{product[0].description}</p>}
        </div>

        
        <div className='Price'>
        <h3>Price:</h3>
        {product && <p>{product[0].price}</p>}
        </div>

        <div className='posted'>
          Posted in<br/>
          {product && <span>{product[0].cityName}</span>}, {product && <span>{product[0].stateName}</span>},{product && <span>{product[0].countryName}</span>}
          
        </div>
        <div>
          <Button variant='outlined'>RENT PRODUCT</Button>
          </div>
         
      </div>
  
  );
};

export default RentProductPage;