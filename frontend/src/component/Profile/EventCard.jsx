
import { Card, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'

const EventCard = () => {
  return (
    <div>
      <Card sx={{width:278}}>
        <CardMedia 
            image='https://cdn.pixabay.com/photo/2022/08/27/14/08/mix-grill-7414547_960_720.jpg'
            sx={{ height: 345 }}
        />
        <CardContent>
            <Typography variant='h5' component={'div'} color='red'>
                Sri Lankan Fast Food
            </Typography>
            <Typography variant='body2' component={'div'}>
                50% off your first order
            </Typography>
            <div className='py-2 space-y-2'>
              <p className='text-yellow-400'>{'Sri lankan'}</p>
              <p className='text-sm text-blue-200'>April 14.2025 12:00 AM</p>
              <p className='text-sm text-red-500'>April 30.2025 12:00 PM</p>
            </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default EventCard
