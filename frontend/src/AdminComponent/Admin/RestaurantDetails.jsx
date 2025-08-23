import React, { useState } from 'react'
import './Restaurentdetails.css';
import { Button, Card, CardContent, CardHeader, Grid, Icon, IconButton } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';

const RestaurantDetails = () => {
  const [restaurantStatus,setRestaurantStatus]=useState();
  const handleRestaurantStatus=(value)=>{
    setRestaurantStatus(value);
  }
  return (
    <div className='lg:px-20 px-5'>
      <div className='py-5 flex justify-center items-center gap-5'>
        <h1 className='text-2xl lg:text-6xl text-center font-bold p-5 blackadder'> Sachi Food restaurant</h1>

        <div className=''>
          <IconButton>
            <Button color={true?'primary':'error'} onClick={handleRestaurantStatus} size='medium'variant='outlined'>
              {true?"close":"Open"}
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
                    <span className='pr-5'>-</span>sachintha sandaruwan
                  </p>
                </div>

                <div className='flex'>
                  <p className='w-48'>Restaurant Name</p>
                  <p className='text-gray-400'>
                    <span className='pr-5'>-</span>sachi food restaurant
                  </p>
                </div>

                <div className='flex'>
                  <p className='w-48'>Cuisune Type</p>
                  <p className='text-gray-400'>
                    <span className='pr-5'>-</span>Srilankan
                  </p>
                </div>

                <div className='flex'>
                  <p className='w-48'>Opening hours</p>
                  <p className='text-gray-400'>
                    <span className='pr-5'>-</span>9.00 am - 9.00.pm
                  </p>
                </div>

                <div className='flex'>
                  <p className='w-48'>Status</p>
                  <p className='text-gray-400'>
                    <span className='pr-5'>-</span>
                    {true?<span className='px-5 py-2 rounded-full bg-green-400 text-gray-950'>open</span>:<span className='px-5 py-2 rounded-full bg-red-400 text-gray-950'>close</span>}
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
                    <span className='pr-5'>-</span>Srilanka
                  </p>
                </div>

                <div className='flex'>
                  <p className='w-48'>City</p>
                  <p className='text-gray-400'>
                    <span className='pr-5'>-</span>Bandarawela
                  </p>
                </div>

                <div className='flex'>
                  <p className='w-48'>Postal Code</p>
                  <p className='text-gray-400'>
                    <span className='pr-5'>-</span>10300
                  </p>
                </div>

                <div className='flex'>
                  <p className='w-48'>Street Address</p>
                  <p className='text-gray-400'>
                    <span className='pr-5'>-</span>30/2 ,Bandarwela road 
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
                    <span className='pr-5'>-</span>sachinthasandaruwan8675@gmail.com
                  </p>
                </div>

                <div className='flex'>
                  <p className='w-20'>Mobile</p>
                  <p className='text-gray-400'>
                    <span className='pr-5'>-</span>+94 71 244 6924
                  </p>
                </div>

                <div className='flex' row>
                  <p className='w-20'>Social</p>
                  <div className='items-center pb-4'>
                    <span className='pr-5'>-</span>
                    <a className='pr-5'href="http://">
                        <InstagramIcon sx={{fontSize:"3rem"}}/>
                      </a>

                      <a className='pr-5'href="http://">
                        <TwitterIcon sx={{fontSize:"3rem"}}/>
                      </a>

                      <a className='pr-5'href="http://">
                        <LinkedInIcon sx={{fontSize:"3rem"}}/>
                      </a>
                      <a href="http://">
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
