import React from 'react'
import EventCard from './EventCard'
import { Create } from '@mui/icons-material'
import { Card, IconButton, Typography } from '@mui/material'

const Events = () => {
  return (
    <div>
      <Card sx={{ px: 5 }}>
        <div className="flex items-center justify-between py-4">
          <Typography variant="h5">Events</Typography>
          <IconButton>
            <Create />
          </IconButton>
        </div>
      </Card>

      <div className='mt-5 px-5 flex flex-wrap gap-5'>
        {[0,1,2].map((item)=><EventCard/>)}
      </div>
    </div>
    
  )
}

export default Events
