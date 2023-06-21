import {React,useState} from 'react';
import Button from '@material-ui/core/Button';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import IconButton from '@material-ui/core/IconButton';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import { Grid } from '@mui/material';
import { useAuthValue } from '../AuthContext';
import { getStorage, ref as storageRef, uploadBytes,getDownloadURL } from "firebase/storage";
const storage = getStorage();

const UploadPhoto = () => {
  
  const [imageURLs, setImageURLs] = useState([]);
  const {newPhotos,photos,setPhotos}=useAuthValue();
  
  const handlePhotoUpload = async(index, file) => {
    try {
    const storageReference = storageRef(storage, `photos/${file.name}`);
    await uploadBytes(storageReference, file);

    // Get the download URL of the uploaded photo
    const downloadURL = await getDownloadURL(storageReference);

    // Update the newPhotos array and image URLs
    newPhotos[index] = downloadURL;
    setPhotos(newPhotos);

    // Update the image URL state
    setImageURLs((prevURLs) => {
      const updatedURLs = [...prevURLs];
      updatedURLs[index] = downloadURL;
      return updatedURLs;
    });
  } catch (error) {
    console.error('Error uploading photo:', error);
  }
};
  

  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform further actions with the uploaded photos
    console.log(photos);
  };
  
  

  return (
    <div>
       <Grid container spacing={2}>
        {[...Array(12)].map((_,index) => (
          <Grid item xs={3} key={index}>
          <div key={index}>
            <label>
             
              <input type="file" accept="image/png,image/jpg,image/jpeg" onChange={(e) => handlePhotoUpload(index, e.target.files[0])}  style={{ display: 'none' }}/>
              <Button variant="contained" sx={{borderColor:'#050505',color:'#050505'}} component="span" id="upload-button"
               style={{width:'135px',height:'130px'}} startIcon={<AddPhotoAlternateIcon style={{fontSize:80}} />}>
                <div
                  style={{
                    backgroundImage: `url(${imageURLs[index]})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    width: '100%',
                    height: '100%',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                  }}
                ></div>
               </Button>
            </label>
          </div>
          </Grid>
        ))}
        </Grid>
        
    </div>
  );
};

export default UploadPhoto;