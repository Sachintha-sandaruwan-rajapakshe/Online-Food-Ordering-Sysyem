import React, { useState } from 'react'
import './Restaurentdetails.css';
import { Button, Card, CardContent, CardHeader, Grid, Icon, IconButton } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import { useDispatch, useSelector } from 'react-redux';
import { updateRestaurentStatus } from '../../component/State/Restaurent/Action';

const RestaurantDetails = () => {

  const dispatch = useDispatch()
  const jwt = localStorage.getItem('jwt');

  const{restaurant}=useSelector(store=>store);
  const [restaurantStatus,setRestaurantStatus]=useState();
  const handleRestaurantStatus=(value)=>{
    //setRestaurantStatus(value);
      dispatch(updateRestaurentStatus({restaurentId: restaurant.userRestaurant.id,jwt}));
    
  }
  return (
    <div className='lg:px-20 px-5'>
      <div className='py-5 flex justify-center items-center gap-5'>
        <h1 className='text-2xl lg:text-6xl text-center font-bold p-5 blackadder'> {restaurant.userRestaurant?.name}</h1>

        <div className=''>
          <IconButton>
            <Button color={!restaurant.userRestaurant?.open?'primary':'error'} onClick={handleRestaurantStatus} size='medium'variant='outlined'>
              {restaurant.userRestaurant?.open?"close":"Open"}
            </Button>
          </IconButton>
        </div>
      </div>
      <Grid container spacing={2}>
        <Grid item xs={12}> 
          <Card>
            <CardHeader title={<span className='text-gray-300'>Restaurant</span>}/>
            <CardContent>
              <div className='space-y-4 text-gray-200'>

                <div className='flex'>
                  <p className='w-48'>Owner</p>
                  <p className='text-gray-400'>
                    <span className='pr-5'>-</span>{restaurant.userRestaurant?.owner?.fullName}
                  </p>
                </div>

                <div className='flex'>
                  <p className='w-48'>Restaurant Name</p>
                  <p className='text-gray-400'>
                    <span className='pr-5'>-</span>{restaurant.userRestaurant?.name}
                  </p>
                </div>

                <div className='flex'>
                  <p className='w-48'>Cuisune Type</p>
                  <p className='text-gray-400'>
                    <span className='pr-5'>-</span>{restaurant.userRestaurant?.cuisineType}
                  </p>
                </div>

                <div className='flex'>
                  <p className='w-48'>Opening hours</p>
                  <p className='text-gray-400'>
                    <span className='pr-5'>-</span>{restaurant.userRestaurant?.openingHours}
                  </p>
                </div>

                <div className='flex'>
                  <p className='w-48'>Status</p>
                  <p className='text-gray-400'>
                    <span className='pr-5'>-</span>
                    {restaurant.userRestaurant?.open?<span className='px-5 py-2 rounded-full bg-green-400 text-gray-950'>open</span>:<span className='px-5 py-2 rounded-full bg-red-400 text-gray-950'>close</span>}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={6}> 
          <Card>
            <CardHeader title={<span className='text-gray-300'>Address</span>}/>
            <CardContent>
              <div className='space-y-4 text-gray-200'>

                <div className='flex'>
                  <p className='w-48'>Country</p>
                  <p className='text-gray-400'>
                    <span className='pr-5'>-</span>{restaurant.userRestaurant?.address?.country}
                  </p>
                </div>

                <div className='flex'>
                  <p className='w-48'>City</p>
                  <p className='text-gray-400'>
                    <span className='pr-5'>-</span>{restaurant.userRestaurant?.address?.city}
                  </p>
                </div>

                <div className='flex'>
                  <p className='w-48'>Postal Code</p>
                  <p className='text-gray-400'>
                    <span className='pr-5'>-</span>{restaurant.userRestaurant?.address?.postalCode}
                  </p>
                </div>

                <div className='flex'>
                  <p className='w-48'>Street Address</p>
                  <p className='text-gray-400'>
                    <span className='pr-5'>-</span>{restaurant.userRestaurant?.address?.streetAddress}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={6}> 
          <Card>
            <CardHeader title={<span className='text-gray-300'>Contact</span>}/>
            <CardContent>
              <div className='space-y-4 text-gray-200'>

                <div className='flex'>
                  <p className='w-20'>Email</p>
                  <p className='text-gray-400'>
                    <span className='pr-5'>-</span>{restaurant.userRestaurant?.contactInformation?.email}
                  </p>
                </div>

                <div className='flex'>
                  <p className='w-20'>Mobile</p>
                  <p className='text-gray-400'>
                    <span className='pr-5'>-</span>{restaurant.userRestaurant?.contactInformation?.mobile}
                  </p>
                </div>

                <div className='flex' row>
                  <p className='w-20'>Social</p>
                  <div className='items-center pb-4'>
                    <span className='pr-5'>-</span>
                    <a className='pr-5'href={restaurant.userRestaurant?.contactInformation?.instagram}>
                        <InstagramIcon sx={{fontSize:"3rem"}}/>
                      </a>

                      <a className='pr-5'href={restaurant.userRestaurant?.contactInformation?.twitter}>
                        <TwitterIcon sx={{fontSize:"3rem"}}/>
                      </a>

                      <a className='pr-5'href={restaurant.userRestaurant?.contactInformation?.linked}>
                        <LinkedInIcon sx={{fontSize:"3rem"}}/>
                      </a>
                      <a href={restaurant.userRestaurant?.contactInformation?.facebook}>
                        <FacebookIcon sx={{fontSize:"3rem"}}/>
                      </a>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  )
}

export default RestaurantDetails
