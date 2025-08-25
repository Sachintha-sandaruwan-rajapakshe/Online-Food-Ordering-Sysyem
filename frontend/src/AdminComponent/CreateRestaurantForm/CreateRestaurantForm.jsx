import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import CloseIcon from '@mui/icons-material/Close';
import { Button, CircularProgress, Grid, IconButton, TextField } from '@mui/material'
import { useFormik } from 'formik'
import React, { useState } from 'react'
import { uploadImageToCloudanary } from '../Utility/UploadCloudanary';
const initialValues={
  name:'',
  description:'',
  cuisineType:'',
  streetAddress:'',
  postalCode:'',
  country:'',
  city:'',
  stateProvince:'',
  email:'',
  mobile:'',
  twitter:'',
  instagram:'',
  openingHours:'Mon-Sun : 9:00 Am - 12:00 PM',
  images:[]
}

const CreateRestaurantForm = () => {
  const [uploadImage,setUploadImage]=useState(false);
  const formik =useFormik({
    initialValues,
    onSubmit:(values)=>{
      const data={
        name:values.name,
        description:values.description,
        cuisineType:values.cuisineType,
        address:{
          streetAddress:values.streetAddress,
          postalCode:values.postalCode,
          country:values.country,
          city:values.city,
          stateProvince:values.stateProvince,
        },
        contactInformation:{
          email:values.email,
          mobile:values.mobile,
          twitter:values.twitter,
          instagram:values.instagram,
        },
        openingHours:values.openingHours,
        images:values.images
      }
      console.log('data : ',data);
    }
  })

  const handleImageChange=async(e)=>{
    const file =e.target.files[0];
    setUploadImage(true);
    const image = await uploadImageToCloudanary(file);
    console.log('image : ',image);
    formik.setFieldValue('images',[...formik.values.images,image])
    setUploadImage(false);
  }
  const handleRemoveImage=(index)=>{
    const updatedImage = [...formik.values.images];
    updatedImage.splice(index,1);
    formik.setFieldValue('images',updatedImage);
  }
  return (
    <div className='py-10 px-5 lg:flex items-center justify-center min-h-screen'>
      <div className='lg:max-w-4xl'>
      <h1 className='py-5 text-center font-bold text-2xl'>Add New Restaurent</h1>

      <form onSubmit={formik.handleSubmit} className='space-y-4'>
        <Grid container spacing={2}>
          <Grid className="flex flex-wrap gap-5" item xs={12}>

            <input 
              accept='image/*'
              id='fileInput'
              style={{display:'none'}}
              type='file'
              onChange={handleImageChange}
              />
              <label className='relative' htmlFor="fileInput">
                <span className='w-24 h-24 cursor-pointer flex items-center justify-center p-3 border rounded-md border-gray-600'>
                <AddPhotoAlternateIcon className='text-white'/>
              </span>
              {
                uploadImage && <div className='absolute left-0 right-0 top-0 bottom-0 w-24 h-24 flex justify-center item-center'><CircularProgress/></div>
              }
              </label>

              <div className='flex flex-wrap gap-2'>
                {formik.values.images.map((image,index)=>
                  <div className='relative'>
                    <img className='w-24 h-24 object-cover'
                    key={index}
                    src={image} alt="" />

                    <IconButton size='small' sx={{position:'absolute',top:0,right:0,outline:'none'}}onClick={()=>handleRemoveImage(index)}>
                    <CloseIcon/>
                  </IconButton>
                  </div>)}
              </div>
          </Grid>

          <Grid item xs={12}>
              <TextField fullWidth 
              id='name'
              label="name"
              name='name'
              variant='outlined'
              onChange={formik.handleChange}
              value={formik.values.name}
              />
          </Grid>

          <Grid item xs={12}>
              <TextField fullWidth 
              id='description'
              label="Description"
              name='description'
              variant='outlined'
              onChange={formik.handleChange}
              value={formik.values.description}
              />
          </Grid>

          <Grid item xs={6}>
              <TextField fullWidth 
              id='streetAddress'
              label="Street Address"
              name='streetAddress'
              variant='outlined'
              onChange={formik.handleChange}
              value={formik.values.streetAddress}
              />
          </Grid>
          
          <Grid item xs={6}>
              <TextField fullWidth
              type='email' 
              id='email'
              label="Email"
              name='email'
              variant='outlined'
              onChange={formik.handleChange}
              value={formik.values.email}
              />
          </Grid>

          <Grid item xs={6}>
              <TextField fullWidth 
              id='cuisineType'
              label="Cuisine Type"
              name='cuisineType'
              variant='outlined'
              onChange={formik.handleChange}
              value={formik.values.cuisineType}
              />
          </Grid>

          <Grid item xs={6}>
              <TextField fullWidth 
              id='stateProvince'
              label="State Province"
              name='stateProvince'
              variant='outlined'
              onChange={formik.handleChange}
              value={formik.values.stateProvnice}
              />
          </Grid>

          <Grid item xs={4}>
              <TextField fullWidth 
              id='postalCode'
              label="Postal Code"
              name='postalCode'
              variant='outlined'
              onChange={formik.handleChange}
              value={formik.values.postalCode}
              />
          </Grid>

          <Grid item xs={4}>
              <TextField fullWidth 
              id='country'
              label="Country"
              name='country'
              variant='outlined'
              onChange={formik.handleChange}
              value={formik.values.country}
              />
          </Grid>

          <Grid item xs={4}>
              <TextField fullWidth 
              id='city'
              label="City"
              name='city'
              variant='outlined'
              onChange={formik.handleChange}
              value={formik.values.name}
              />
          </Grid>

          <Grid item xs={6}>
              <TextField fullWidth
              type='number'
              id='mobile'
              label="Mobile"
              name='mobile'
              variant='outlined'
              onChange={formik.handleChange}
              value={formik.values.mobile}
              />
          </Grid>
          
          <Grid item xs={6}>
              <TextField fullWidth 
              id='openingHours'
              label="Opening Hours"
              name='openingHours'
              variant='outlined'
              onChange={formik.handleChange}
              value={formik.values.openingHours}
              />
          </Grid>

          <Grid item xs={6}>
              <TextField fullWidth 
              id='twitter'
              label="Twitter"
              name='twitter'
              variant='outlined'
              onChange={formik.handleChange}
              value={formik.values.twitter}
              />
          </Grid>

          <Grid item xs={6}>
              <TextField fullWidth 
              id='instagram'
              label="Instagram"
              name='instagram'
              variant='outlined'
              onChange={formik.handleChange}
              value={formik.values.instagram}
              />
          </Grid>
        </Grid>

        <Button variant='contained' type='submit'>Create restaurant</Button>
      </form>
      </div>
    </div>
  )
}

export default CreateRestaurantForm
