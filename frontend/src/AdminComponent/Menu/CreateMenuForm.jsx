import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import CloseIcon from '@mui/icons-material/Close';
import { Box, Button, Chip, CircularProgress, FormControl, Grid, IconButton, InputLabel, MenuItem, OutlinedInput, Select, TextField } from '@mui/material';
import { useFormik } from 'formik';
import React, { useEffect, useState } from 'react';
import { uploadImageToCloudanary } from '../Utility/UploadCloudanary';
import { useDispatch, useSelector } from 'react-redux';
import { createMenuItem } from '../../component/State/Menu/Action';
import { getIngredientsOfRestaurent } from '../../component/State/Ingredients/Action';
import { useNavigate } from 'react-router-dom';

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
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const jwt = localStorage.getItem('jwt');
  const { restaurant, ingredients } = useSelector(store => store);

  const [uploadImage, setUploadImage] = useState(false);

  useEffect(() => {
    if (restaurant.userRestaurant?.id) {
      dispatch(getIngredientsOfRestaurent({ id: restaurant.userRestaurant.id, jwt }));
    }
  }, [restaurant.userRestaurant]);

  const formik = useFormik({
    initialValues: {
      name: '',
      description: '',
      price: '',
      category: null,
      restaurentId: restaurant.userRestaurant?.id || null,
      vegetarian: true,
      seasonal: false,
      ingredients: [],
      images: [],
    },
    onSubmit: (values) => {
      const data = {
        name: values.name,
        description: values.description,
        price: Number(values.price),
        images: values.images,
        restaurentId: restaurant.userRestaurant?.id,
        vegetarian: values.vegetarian, // spelling must match backend
        seasional: values.seasonal,   // spelling must match backend
        category: values.category,    // full object {id, name}
        ingredients: values.ingredients.map(item => ({
          id: item.id,
          name: item.name,
          category: item.category,
          inStock: item.inStock
        }))
      };
      console.log('Submitting:', data);
      dispatch(createMenuItem({ menu: data, jwt }));
      navigate('/admin/restaurent/menu');
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
    const updatedImages = [...formik.values.images];
    updatedImages.splice(index, 1);
    formik.setFieldValue('images', updatedImages);
  };

  return (
    <div className='py-10 px-5 lg:flex items-center justify-center min-h-screen'>
      <div className='lg:max-w-4xl'>
        <h1 className='py-5 text-center font-bold text-2xl'>Add New Menu</h1>

        <form onSubmit={formik.handleSubmit} className='space-y-4'>
          <Grid container spacing={2}>
            {/* Images Upload */}
            <Grid item xs={12} className="flex flex-wrap gap-5">
              <input
                accept="image/*"
                id="fileInput"
                style={{ display: 'none' }}
                type="file"
                onChange={handleImageChange}
              />
              <label htmlFor="fileInput" className='relative'>
                <span className='w-24 h-24 cursor-pointer flex items-center justify-center p-3 border rounded-md border-gray-600'>
                  <AddPhotoAlternateIcon className='text-white'/>
                </span>
                {uploadImage && (
                  <div className='absolute left-0 right-0 top-0 bottom-0 w-24 h-24 flex justify-center items-center'>
                    <CircularProgress />
                  </div>
                )}
              </label>
              <div className='flex flex-wrap gap-2'>
                {formik.values.images.map((image, index) => (
                  <div key={index} className='relative'>
                    <img className='w-24 h-24 object-cover' src={image} alt="" />
                    <IconButton
                      size='small'
                      sx={{ position: 'absolute', top: 0, right: 0, outline: 'none' }}
                      onClick={() => handleRemoveImage(index)}
                    >
                      <CloseIcon />
                    </IconButton>
                  </div>
                ))}
              </div>
            </Grid>

            {/* Name */}
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Name"
                name="name"
                value={formik.values.name}
                onChange={formik.handleChange}
              />
            </Grid>

            {/* Description */}
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Description"
                name="description"
                value={formik.values.description}
                onChange={formik.handleChange}
              />
            </Grid>

            {/* Price */}
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Price"
                name="price"
                type="number"
                value={formik.values.price}
                onChange={formik.handleChange}
              />
            </Grid>

            {/* Category Select */}
            <Grid item xs={6}>
              <FormControl fullWidth>
                <InputLabel id="category-label">Category</InputLabel>
                <Select
                  labelId="category-label"
                  value={formik.values.category?.name || ''}
                  onChange={(e) => {
                    const selected = restaurant.categories.find(category => category.name === e.target.value);
                    formik.setFieldValue('category', selected);
                  }}
                >
                  {restaurant.categories?.map(category => (
                    <MenuItem key={category.id} value={category.name}>{category.name}</MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>

            {/* Ingredients Select */}
            <Grid item xs={6}>
              <FormControl fullWidth>
                <InputLabel id="ingredients-label">Ingredients</InputLabel>
                <Select
                  labelId="ingredients-label"
                  multiple
                  value={formik.values.ingredients.map(item => item.name)}
                  onChange={(e) => {
                    const selectedNames = e.target.value;
                    const selectedObjects = ingredients.ingredients.filter(item =>
                      selectedNames.includes(item.name)
                    );
                    formik.setFieldValue('ingredients', selectedObjects);
                  }}
                  input={<OutlinedInput id="select-multiple-chip" label="Ingredients" />}
                  renderValue={(selected) => (
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                      {selected.map((name) => {
                        const item = formik.values.ingredients.find(i => i.name === name);
                        return <Chip key={item.id} label={item.name} />;
                      })}
                    </Box>
                  )}
                  MenuProps={MenuProps}
                >
                  {ingredients.ingredients?.map(item => (
                    <MenuItem key={item.id} value={item.name}>{item.name}</MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>

            {/* Vegetarian */}
            <Grid item xs={6}>
              <FormControl fullWidth>
                <InputLabel id="vegetarian-label">Vegetarian</InputLabel>
                <Select
                  labelId="vegetarian-label"
                  value={formik.values.vegetarian}
                  name="vegetarian"
                  onChange={formik.handleChange}
                >
                  <MenuItem value={true}>Yes</MenuItem>
                  <MenuItem value={false}>No</MenuItem>
                </Select>
              </FormControl>
            </Grid>

            {/* Seasonal */}
            <Grid item xs={6}>
              <FormControl fullWidth>
                <InputLabel id="seasonal-label">Seasonal</InputLabel>
                <Select
                  labelId="seasonal-label"
                  value={formik.values.seasonal}
                  name="seasonal"
                  onChange={formik.handleChange}
                >
                  <MenuItem value={true}>Yes</MenuItem>
                  <MenuItem value={false}>No</MenuItem>
                </Select>
              </FormControl>
            </Grid>

          </Grid>

          <Button type="submit" variant="contained">Create New Menu</Button>
        </form>
      </div>
    </div>
  );
};

export default CreateMenuForm;
