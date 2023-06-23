import React, { useEffect, useState } from 'react';
import { db } from './Firebase';
import { onValue, ref } from 'firebase/database';
import { useParams } from 'react-router';
import ReactImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';

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
        original: image.url,
        thumbnail: image.url,
      }));
      setSliderImages(images);
    }
  }, [product]);

  return (
    <div><br/>
      
      <div>
        <h3>Price:</h3>
        {product && <p>{product[0].price}</p>}
        <ReactImageGallery items={sliderImages} />
      </div>
    </div>
  );
};

export default RentProductPage;