import React, { useState } from 'react';
import { useFormik } from 'formik';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import CloseIcon from '@mui/icons-material/Close';
import { 
  Button, CircularProgress, Grid, IconButton, TextField 
} from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { uploadImageToCloudanary } from '../Utility/UploadCloudanary';
import { useDispatch, useSelector } from 'react-redux';

const initialValues = {
  name: '',
  location: '',
  startAt: null,
  endAt: null,
  images: []
};

const CreateEvent = () => {
  const [uploadImage, setUploadImage] = useState(false);

  const dispatch = useDispatch();
  const jwt = localStorage.getItem('jwt');
  const { restaurant, ingredients } = useSelector(store => store);

  const formik = useFormik({
    initialValues,
    onSubmit: (values) => {
      const data = {
        ...values,
        startAt: values.startAt ? values.startAt.format("MM/DD/YYYY hh:mm A") : null,
    endAt: values.endAt ? values.endAt.format("MM/DD/YYYY hh:mm A") : null,
      };
      console.log('Submitted data:', data);
      dispatch();
    }
  });

  const handleImageChange = async (e) => {
    const file = e.target.files[0];
    if (!file) return;
    setUploadImage(true);
    const image = await uploadImageToCloudanary(file);
    formik.setFieldValue('images', [...formik.values.images, image]);
    setUploadImage(false);
  };

  const handleRemoveImage = (index) => {
    const updatedImage = [...formik.values.images];
    updatedImage.splice(index, 1);
    formik.setFieldValue('images', updatedImage);
  };

  return (
    <div className="py-10 px-5 lg:flex items-center justify-center min-h-screen">
      <div className="lg:max-w-4xl w-full">
        <h1 className="py-5 text-center font-bold text-2xl">Add New Menu</h1>

        <form onSubmit={formik.handleSubmit} className="space-y-4">
          <Grid container spacing={2}>

            {/* Image Upload */}
            <Grid item xs={12} className="flex flex-wrap gap-5">
              <input 
                accept="image/*"
                id="fileInput"
                style={{display:'none'}}
                type="file"
                onChange={handleImageChange}
              />
              <label className="relative" htmlFor="fileInput">
                <span className="w-24 h-24 cursor-pointer flex items-center justify-center p-3 border rounded-md border-gray-600">
                  <AddPhotoAlternateIcon className="text-white"/>
                </span>
                {uploadImage && (
                  <div className="absolute left-0 right-0 top-0 bottom-0 w-24 h-24 flex justify-center items-center">
                    <CircularProgress />
                  </div>
                )}
              </label>

              <div className="flex flex-wrap gap-2">
                {formik.values.images.map((image, index) => (
                  <div className="relative" key={index}>
                    <img className="w-24 h-24 object-cover" src={image} alt="" />
                    <IconButton 
                      size="small" 
                      sx={{position:'absolute', top:0, right:0, outline:'none'}} 
                      onClick={() => handleRemoveImage(index)}
                    >
                      <CloseIcon />
                    </IconButton>
                  </div>
                ))}
              </div>
            </Grid>

            {/* Location */}
            <Grid item xs={12}>
              <TextField 
                fullWidth 
                id="location"
                label="Location"
                name="location"
                variant="outlined"
                onChange={formik.handleChange}
                value={formik.values.location}
              />
            </Grid>

            {/* Event Name */}
            <Grid item xs={12}>
              <TextField 
                fullWidth 
                id="name"
                label="Event Name"
                name="name"
                variant="outlined"
                onChange={formik.handleChange}
                value={formik.values.name}
              />
            </Grid>

            {/* Start Date & Time */}
            <Grid item xs={12}>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DateTimePicker
                  label="Start Date and Time"
                  value={formik.values.startAt}
                  onChange={(newValue) => formik.setFieldValue('startAt', newValue)}
                  format="MM/DD/YYYY hh:mm A"   // 👈 custom format
                  sx={{ width: '100%' }}
                />
              </LocalizationProvider>
            </Grid>

            {/* End Date & Time */}
            <Grid item xs={12}>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DateTimePicker
                  label="End Date and Time"
                  value={formik.values.endAt}
                  onChange={(newValue) => formik.setFieldValue('endAt', newValue)}
                  format="MM/DD/YYYY hh:mm A"   // 👈 custom format
                  sx={{ width: '100%' }}
                />
              </LocalizationProvider>
            </Grid>
          </Grid>

          <Button variant="contained" type="submit">Create New Menu</Button>
        </form>
      </div>
    </div>
  );
};

export default CreateEvent;
