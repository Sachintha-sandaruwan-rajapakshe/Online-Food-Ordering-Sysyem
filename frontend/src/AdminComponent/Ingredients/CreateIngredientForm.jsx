import { Button, FormControl, Grid, InputLabel, MenuItem, Select, TextField } from '@mui/material'
import React, { useState } from 'react'

const CreateIngredientForm = () => {
  const [formData, setFormData] = useState({
    categoryName: '',
    ingredientCategoryId: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()   // <-- stop page refresh

    const data = {
      name: formData.categoryName,
      category: formData.ingredientCategoryId,
      restaurentId: {
        id: 1
      }
    }

    console.log("data ", data)
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
              {["pizza", "burger", "sandwich"].map((name) => (
                <MenuItem key={name} value={name}>
                  {name}
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
