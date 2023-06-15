import { TextField,InputAdornment,Button } from '@mui/material';
import React, { useState,useRef } from 'react';
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import './Styles/UploadPhoto.css'

const PhotoUploadForm = () => {
  const [selectedPhotos, setSelectedPhotos] = useState([]);
  const fileInputRef = useRef(null);

  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  const handlePhotoUpload = (event) => {
    const files = event.target.files;
    const selectedPhotosArray = Array.from(files);
    setSelectedPhotos(selectedPhotosArray);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Create a new FormData object
    const formData = new FormData();

    // Append each selected photo to the FormData object
    selectedPhotos.forEach((photo, index) => {
      formData.append(`photo${index}`, photo);
    });

    // Send the formData to your server for processing
    // You can use libraries like axios or fetch for making the HTTP request
    // Example using axios:
    // axios.post('/upload', formData)
    //   .then(response => {
    //     // Handle the response from the server
    //   })
    //   .catch(error => {
    //     // Handle any errors that occurred during the upload
    //   });
    const uploadedImageCount = selectedPhotos.length;
    console.log(`Total images uploaded: ${uploadedImageCount}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="file"
        accept="image/*"
        id="upload-input"
        style={{ display: 'none' }}
        ref={fileInputRef}
        onChange={handlePhotoUpload}
        multiple
      />
      <Button className='UploadButton' variant="outlined"sx={{borderColor:'black',color:'black',width:'100px',height:'120px'}} component="span" onClick={handleButtonClick} startIcon={<AddAPhotoIcon style={{fontSize:40}}/>}>
       <b> Add Photo</b>
      </Button>
    </form>
  );
};

export default PhotoUploadForm;
