import React, { useEffect, useState } from 'react';
import { db } from './Firebase';
import { onValue, ref } from 'firebase/database';
import SimpleImageSlider from 'react-simple-image-slider';
import { useParams } from 'react-router';


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
    console.log(sliderImages)
  }, [sliderImages]);

  useEffect(() => {
    if (product && product[0].newPhotos) {
      const images = product[0].newPhotos.map((image) => ({
        url: image
      }));
      setSliderImages(images);
    }
  }, [product]);

  return (
    
      <div>
        <SimpleImageSlider images={sliderImages} width={500} height={500} />
        <hr />
          <div>
            <h3>Price:</h3>
            {product && <p>{product[0].price}</p>}
          </div>
          {/* <div>
            <h3>Other Details:</h3>
            {product && <p>{product.otherDetails}</p>}
          </div> */}
          </div>
       
  );
};

export default RentProductPage;
