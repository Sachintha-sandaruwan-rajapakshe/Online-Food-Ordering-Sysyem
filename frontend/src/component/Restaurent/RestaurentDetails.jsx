import { Divider, FormControl, FormControlLabel, Grid, Radio, RadioGroup, Typography } from '@mui/material'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import React, { useEffect, useState } from 'react'
import MenuCard from './MenuCard';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getRestaurentById, getRestaurentCategory } from '../State/Restaurent/Action';
import { getMenuItemsByRestaurantId } from '../State/Menu/Action';

const foodTypes = [
  { label: 'All', value: 'all' },
  { label: 'Vegitarion only', value: 'vegiterian' },
  { label: 'Non Vegitarion', value: 'nonvegetarain' },
  { label: 'Seasonal', value: 'seasonal' }
]

const RestaurentDetails = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const jwt = localStorage.getItem('jwt');
  const { restaurant, menu } = useSelector(store => store);

  const [selectedCategory, setSelectedCategory] = useState("");
  const [foodType, setFoodType] = useState("all");

  const { id } = useParams();

  // Handle Food Type
  const handleFilter = (e) => {
    setFoodType(e.target.value);
  }

  // Handle Food Category
  const handleFilterCategory = (e) => {
    setSelectedCategory(e.target.value);
  }

  useEffect(() => {
    dispatch(getRestaurentById({ jwt, restaurentId: id }));
    dispatch(getRestaurentCategory({ jwt, restaurentId: id }));
  }, [dispatch, jwt, id]);

  useEffect(() => {
    dispatch(getMenuItemsByRestaurantId({
      jwt,
      reqData: {
        restaurentId: id,
        vegetarian: foodType === "vegiterian",
        nonvegetarain: foodType === "nonvegetarain",
        seasonal: foodType === "seasonal",
        food_Category: selectedCategory 
      }
    }));
  }, [dispatch, jwt, id, selectedCategory, foodType]);

  return (
    <div className='px-5 lg:px-20'>
      <section>
        <h3 className='py-3 mt-10'>
          {restaurant.restaurant?.address?.country} /
          {restaurant.restaurant?.address?.city} /
          {restaurant.restaurant?.name} /
          {id}
        </h3>
        <div>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <img className='w-full h-[40vh] object-cover'
                src={restaurant.restaurant?.images[0]}
                alt="" />
            </Grid>

            <Grid item xs={12} lg={6}>
              <img className='w-full h-[40vh] object-cover'
                src={restaurant.restaurant?.images[1]}
                alt="" />
            </Grid>

            <Grid item xs={12} lg={6}>
              <img className='w-full h-[40vh] object-cover'
                src={restaurant.restaurant?.images[2]}
                alt="" />
            </Grid>
          </Grid>
        </div>

        <div className='pt-3 pb-5'>
          <h1 className='text-4xl font-semibold text-gray-300'>{restaurant.restaurant?.name}</h1>
          <p className='text-gray-300 flex items-center gap-3'>
            <span className='text-gray-500'>
              {restaurant.restaurant?.description}
            </span>
          </p>

          <p className='text-gray-300 flex items-center gap-2'>
            <LocationOnIcon className='m-4' />
            <span>
              {restaurant.restaurant?.address?.streetAddress}
            </span>
          </p>

          <p className='text-gray-300 flex items-center gap-2'>
            <CalendarMonthIcon className='m-4' />
            <span>
              {restaurant.restaurant?.openingHours}(Today)
            </span>
          </p>
        </div>
      </section>
      <Divider />
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
                      label={item.label}
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
                <RadioGroup name='food_category' value={selectedCategory} onChange={handleFilterCategory}>
                  {restaurant.categories?.map((item) => (
                    <FormControlLabel
                      key={item.id}
                      value={item.name} // send id instead of name
                      control={<Radio />}
                      label={item.name}
                    />
                  ))}
                </RadioGroup>
              </FormControl>
            </div>
          </div>
        </div>

        <div className='space-y-5 lg-w[80%] lg:pl-10'>
          {menu.menuItems?.map((item) => <MenuCard key={item.id} item={item} />)}
        </div>
      </section>
    </div>
  )
}

export default RestaurentDetails
