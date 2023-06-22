import React, { useEffect, useState } from 'react';
import { db } from './Firebase';
import { onValue, ref } from 'firebase/database';
import SimpleImageSlider from 'react-simple-image-slider';
import styled from 'styled-components';
import { useParams } from 'react-router';


const RentProductContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SliderContainer = styled.div`
  width: 500px;
  height: 250px;
`;

const ProductDetailsContainer = styled.div`
  width: 500px;
  margin-top: 20px;
`;

const PriceContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
`;


const RentProductPage = () => {
    const {productId}=useParams();
  const [product, setProduct] = useState(null);
  const sliderImages = [];

  

  // Push product photos to the sliderImages array
 

  return (
    <RentProductContainer>
        <p>{productId}</p>
      <SliderContainer>
        <SimpleImageSlider images={sliderImages} width={500} height={250} />
      </SliderContainer>
      <ProductDetailsContainer>
       
        <hr />
        <PriceContainer>
          <div>
            <h3>Price:</h3>
           
          </div>
          <div>
            <h3>Other Details:</h3>
            
            {/* Render other product details */}
          </div>
        </PriceContainer>
      </ProductDetailsContainer>
    </RentProductContainer>
  );
};

export default RentProductPage;
