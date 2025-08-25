import { Button, Grid, TextField } from '@mui/material'
import React, { useState } from 'react'

const CreateFoodCategoryForm = () => {
    const[formData,setFormData] = useState({categoryName:'',restaurentId:''})
    const handleSubmit =()=>{
        
        const data={
            name:formData.categoryName,
            restaurentId:{
                id:1
            }
        }
        console.log("data ",data);
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
              label="categoryName"
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

export default CreateFoodCategoryForm
