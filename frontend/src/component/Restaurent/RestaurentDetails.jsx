import { Divider, FormControl, FormControlLabel, Grid, Grid2, Radio, RadioGroup, Typography } from '@mui/material'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';
import React, { useEffect, useState } from 'react'
import MenuCard from './MenuCard';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getRestaurentById } from '../State/Restaurent/Action';

const categories=[
    'pizza',
    'burger',
    'chiken',
    'rice'
]

const foodTypes=[
    {label:'All',value:'All'},
    {label:'Vegitarion only',value:'vegiterian'},
    {label:'Non Vegitarion',value:'non_Vegitarion'},
    {label:'seasonal',value:'seasonal'}
]

const menu=[1,1,1,1,1,1,1]

const RestaurentDetails = () => {

    const navigate = useNavigate();
    const dispatch =useDispatch();
    const jwt = localStorage.getItem('jwt');
    const { auth,restaurant} = useSelector(store => store);

    const {city,id} =useParams();
        
    const [foodType,setFoodType]=useState("all");
    const handleFilter=(e)=>{
        console.log(e.target.value,e.target.name)
    }
    
    useEffect(()=>{
        dispatch(getRestaurentById({jwt,restaurentId:id}))
    },[])
    console.log('restaurant',restaurant)
    
  return (
    <div className='px-5 lg:px-20'>
      <section>
        <h3 className='py-3 mt-10'>Home/sri lankan/sri lankan fast food/3</h3>
        <div>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <img className='w-full h-[40vh] object-cover' 
                    src="https://images.pexels.com/photos/1307698/pexels-photo-1307698.jpeg?auto=compress&cs=tinysrgb&w=600" 
                    alt="" />
                </Grid>

                <Grid item xs={12} lg={6}>
                    <img className='w-full h-[40vh] object-cover' 
                    src="https://images.pexels.com/photos/1449773/pexels-photo-1449773.jpeg?auto=compress&cs=tinysrgb&w=600" 
                    alt="" />
                </Grid>

                <Grid item xs={12} lg={6}>
                    <img className='w-full h-[40vh] object-cover' 
                    src="https://images.pexels.com/photos/1537635/pexels-photo-1537635.jpeg?auto=compress&cs=tinysrgb&w=600" 
                    alt="" />
                </Grid>
            </Grid>
            
        </div>
        <div className='pt-3 pb-5'>
            <h1 className='text-4xl font-semibold text-gray-300'>Sri Lankan Kandy Food</h1>
            <p className='text-gray-300 flex items-center gap-3'>
                <span className='text-gray-500'>
                A staple Sri Lankan dish featuring steamed rice served with an assortment of curries, such as dhal (lentil curry), chicken or fish curry, tempered vegetables, and spicy sambols. Each curry is flavored with coconut milk and aromatic spices.
                </span>
            </p>

            <p className='text-gray-300 flex items-center gap-2'>
                <LocationOnIcon className='m-4'/>
                <span>
                Kandy road No.05 haras vidiya.
                </span>
            </p>

            <p className='text-gray-300 flex items-center gap-2'>
                <CalendarMonthIcon className='m-4'/>
                <span>
                Mon-sun:9.00 AM - 9.00 PM(Today)
                </span>
            </p>
        </div>
      </section>
      <Divider/>
      <section className='pt-[2rem] lg:flex relative'>
        <div className='space-y-10 lg:w-[20%] filter p-5 shadow-lg'>
            <div className='box space-y-5 lg:sticky top-28'>
                <div>
                    <Typography variant='h5' sx={{ paddingBottom: '1rem' }}>
                        Food Type
                    </Typography>

                    <FormControl component="fieldset">
                        <RadioGroup name='food_type' value={foodType} onChange={handleFilter}>
                            {foodTypes.map((item) => (
                                <FormControlLabel 
                                    key={item.value} 
                                    value={item.value} 
                                    control={<Radio />} 
                                    label={item.value} 
                                />
                            ))}
                        </RadioGroup>
                    </FormControl>
                </div>
                <Divider />
                <div>
                    <Typography variant='h5' sx={{ paddingBottom: '1rem' }}>
                        Food Category
                    </Typography>

                    <FormControl component="fieldset">
                        <RadioGroup name='food_category' value={foodType} onChange={handleFilter}>
                            {categories.map((item) => (
                                <FormControlLabel 
                                    key={item} 
                                    value={item.value} 
                                    control={<Radio />} 
                                    label={item} 
                                />
                            ))}
                        </RadioGroup>
                    </FormControl>
                </div>
            </div>
        </div>

        <div className='space-y-5 lg-w[80%] lg:pl-10'>
            {menu.map((item)=><MenuCard/>)}
            
        </div>
      </section>
    </div>
  )
}

export default RestaurentDetails

