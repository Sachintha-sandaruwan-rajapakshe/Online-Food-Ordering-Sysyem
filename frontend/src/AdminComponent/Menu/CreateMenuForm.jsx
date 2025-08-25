import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import CloseIcon from '@mui/icons-material/Close';
import { Box, Button, Chip, CircularProgress, FormControl, Grid, IconButton, InputLabel, MenuItem, OutlinedInput, Select, TextField } from '@mui/material'
import { useFormik } from 'formik'
import React, { useState } from 'react'
import { uploadImageToCloudanary } from '../Utility/UploadCloudanary';
const initialValues={
  name:'',
  description:'',
  price:'',
  category:'',
  restaurentId:'',
  vegetarian:true,
  seasonal:false,
  ingredients:[],
  images:[]
}

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;

const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};


const CreateMenuForm = () => {
  const [uploadImage,setUploadImage]=useState(false);
  const formik =useFormik({
    initialValues,
    onSubmit:(values)=>{
      const data={
        name:values.name,
        description:values.description,
        price:values.price,
        category:values.category,
        restaurentId:values.restaurentId,
        vegetarian:values.vegetarian,
        seasonal:values.seasonal,
        ingredients:values.ingredients,
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
      <h1 className='py-5 text-center font-bold text-2xl'>Add New Menu</h1>

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

          <Grid item xs={12}>
              <TextField fullWidth 
              id='price'
              label="price"
              name='price'
              variant='outlined'
              onChange={formik.handleChange}
              value={formik.values.price}
              />
          </Grid>

          <Grid item xs={6}>
              <FormControl fullWidth>
                <InputLabel id="category">Category</InputLabel>
                <Select
                  labelId="category"
                  id="category"
                  value={formik.values.category}
                  name='category'
                  label="category"
                  onChange={formik.handleChange}
                >
                 {["pizaa","barger","sanwich"].map((name,index) => (
                    <MenuItem
                      key={name}
                      value={name}
                    >
                      {name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
          </Grid>
          
          <Grid item xs={6}>
              <FormControl fullWidth>
                <InputLabel id="ingredients">ingredients</InputLabel>
                <Select
                  labelId="ingredients"
                  id="ingredients"
                  name='ingredients'
                  multiple
                  value={formik.values.ingredients}
                  onChange={formik.handleChange}
                  input={<OutlinedInput id="select-multiple-chip" label="ingredients" />}
                  renderValue={(selected) => (
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                      {selected.map((value) => (
                        <Chip key={value} label={value} />
                      ))}
                    </Box>
                  )}
                  MenuProps={MenuProps}
                >
                  {["white source","bread","tomato source"].map((name,index) => (
                    <MenuItem
                      key={name}
                      value={name}
                      //style={getStyles(name, personName, theme)}
                    >
                      {name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
          </Grid>

          <Grid item xs={6}>
              <FormControl fullWidth>
                <InputLabel id="vegetarian">Is vegetarian</InputLabel>
                <Select
                  labelId="vegetarian"
                  id="vegetarian"
                  value={formik.values.vegetarian}
                  name='vegetarian'
                  label="vegetarian"
                  onChange={formik.handleChange}
                >
                  <MenuItem value={true}>yes</MenuItem>
                  <MenuItem value={false}>no</MenuItem>
                </Select>
              </FormControl>
          </Grid>

          <Grid item xs={6}>
              <FormControl fullWidth>
                <InputLabel id="seasonal">Is seasonal</InputLabel>
                <Select
                  labelId="seasonal"
                  id="seasonal"
                  value={formik.values.seasonal}
                  name='seasonal'
                  label="seasonal"
                  onChange={formik.handleChange}
                >
                  <MenuItem value={true}>yes</MenuItem>
                  <MenuItem value={false}>no</MenuItem>
                </Select>
              </FormControl>
          </Grid>

          
        </Grid>

        <Button variant='contained' type='submit'>Create New Menu</Button>
      </form>
      </div>
    </div>
  )
}

export default CreateMenuForm
