import { Button, FormControl, Grid, InputLabel, MenuItem, Select, TextField } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { createIngredient, getIngredientCategory } from '../../component/State/Ingredients/Action';

const CreateIngredientForm = () => {
  const jwt  = localStorage.getItem('jwt');
  const dispatch = useDispatch();
  const{restaurant,ingredients}= useSelector(store=>store)

  useEffect(()=>{
     dispatch(getIngredientCategory({ id:restaurant.userRestaurant?.id, jwt }));
  },[])

  const [formData, setFormData] = useState({
    categoryName: '',
    ingredientCategoryId: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()   // <-- stop page refresh

    const data = {
      name: formData.categoryName,
      categoryId: formData.ingredientCategoryId,
      restaurentId:restaurant.userRestaurant?.id,
    }
    console.log("data ", data)
     dispatch(createIngredient({jwt,reqData:data}))
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  return (
    <div className='p-5'>
      <h1 className='text-gray-400 items-center text-center text-1xl pb-10'>
        Create Category
      </h1>

      <form onSubmit={handleSubmit} className='space-y-3'>
        <Grid item xs={4}>
          <TextField
            fullWidth
            id='categoryName'
            label="Category Name"
            name='categoryName'
            variant='outlined'
            onChange={handleInputChange}
            value={formData.categoryName}
          />
        </Grid>

        <Grid item xs={6}>
          <FormControl fullWidth>
            <InputLabel id="ingredientCategoryId">Category</InputLabel>
            <Select
              labelId="ingredientCategoryId"
              id="ingredientCategoryId"
              value={formData.ingredientCategoryId}
              name='ingredientCategoryId'
              label="category"
              onChange={handleInputChange}
            >
              {ingredients.ingredientCategories?.map((item) => (
                <MenuItem key={item.id} value={item.id}>
                  {item.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>

        <div className='p-2 flex items-center justify-center'>
          <Button variant='contained' type='submit'>Create Ingredient</Button>
        </div>
      </form>
    </div>
  )
}

export default CreateIngredientForm
