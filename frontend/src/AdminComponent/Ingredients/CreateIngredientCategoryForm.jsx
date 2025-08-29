import { Button, Grid, TextField } from '@mui/material'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { createIngredient, createIngredientCategory } from '../../component/State/Ingredients/Action';

const CreateIngredientCategoryForm = () => {

  const jwt  = localStorage.getItem('jwt');
  const dispatch = useDispatch();
  const{restaurant}= useSelector(store=>store)

  const[formData,setFormData] = useState({categoryName:'',restaurentId:''})
    const handleSubmit =(e)=>{
        //e.preventDefault(); 
        const data={
            name:formData.categoryName,
            restaurentId: restaurant.userRestaurant?.id
        }
        console.log("data ",data);
        dispatch(createIngredientCategory({jwt,reqData:data}))
    }
    const handleInputChange =(e)=>{
        const {name,value}=e.target
        setFormData({...formData,[name]:value})
    }
  return (
    <div className='p-5'>
        <h1 className='text-gray-400 items-center text-center text-1xl pb-10'>
            Create Category
        </h1>
        <form onSubmit={handleSubmit}>
        <Grid item xs={4}>
              <TextField fullWidth 
              id='categoryName'
              label="Ingredient Category"
              name='categoryName'
              variant='outlined'
              onChange={handleInputChange}
              value={formData.categoryName}
              />
          </Grid>
          <div className='p-5 flex items-center justify-center'>
            <Button variant='contained' type='submit'>create category</Button>
          </div>
          </form>
    </div>
  )
}

export default CreateIngredientCategoryForm


