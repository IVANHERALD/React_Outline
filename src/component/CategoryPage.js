import React,{useState,useEffect} from 'react'
import {ref,onValue} from 'firebase/database';
import {db} from './Firebase'

function CategoryPage() {
   const [recentyAdded,setRecentlyAdded]=useState([]);
  const prodRef = ref(db, 'product');
  useEffect(()=> {
    onValue(prodRef, (snapshot) => {
      const data = snapshot.val();
      const recentlyAddedData = Object.values(data);
     setRecentlyAdded(recentlyAddedData);
  
    });
  },[]);

  useEffect(() => {
    console.log(recentyAdded);
  }, [recentyAdded]);

  return (
    <div>
        {recentyAdded.map((item, index) => (
      <div key={index}>
      <h4>{item[0].adTitle}</h4>
       <p>Category: {item[0].category}</p>
       {item[0].brandName && (
      <p>Brand: {item[0].brandName[0]}</p>
       )}
       <p>cityCode: {item[0].cityCode}</p>
       <p>countryCode: {item[0].countryCode}</p>
       <p>description: {item[0].description}</p>
       <p>displayName: {item[0].displayName}</p>
       <p>email: {item[0].email}</p>
       <p>Price: {item[0].price}</p>
       <p>stateCode: {item[0].stateCode}</p>
       {item[0].newPhotos && item[0].newPhotos.length > 0 && (
      <div>
        <h5>Photos:</h5>
        <div className="image-container">
          {item[0].newPhotos.map((photo, photoIndex) => (
            <img
              key={photoIndex}
              src={photo}
              alt={`Product Photo ${photoIndex + 1}`}
            />
          ))}
        </div>
        </div>
    )}
    
     </div>
      ))} </div>
  )
}

export default CategoryPage
