import React, { useEffect, useState } from 'react';
import { db } from './Firebase';
import { onValue, ref } from 'firebase/database';
import { useParams } from 'react-router';
import ReactImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';
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
      }));
      setSliderImages(images);
    }
  }, [product]);

  return (
    <div className='container'><br/>
      
      <div className='left-content'>
        <div className='img' >
          
        <ReactImageGallery items={sliderImages} /> 
        </div>
        <div className='Details'>
          <b>Details</b>
          <h3>Brand:</h3>
        {product && <p>{product[0].brandName}</p>}
        <hr/>
        Description<br/>
        {product && <p>{product[0].description}</p>}

        </div>
        <div className='right-content'>
        <h3>Price:</h3>
        {product && <p>{product[0].price}</p>}</div>

        <div>
          Posted in<br/>
          
        </div>
         
      </div>
    </div>
  );
};

export default RentProductPage;