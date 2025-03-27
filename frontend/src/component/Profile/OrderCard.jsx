import { Button, Card } from '@mui/material'
import React from 'react'

const OrderCard = () => {
  return (
    <Card className='flex justify-between items-center p-4'>
        <div className='flex items-center space-x-2'>
            <img className='h-16 w-16' src="https://media.istockphoto.com/id/2077426665/photo/selective-focus-of-one-of-the-most-popular-food-in-india-biryani.jpg?s=1024x1024&w=is&k=20&c=TrplV8CyNlyWQf0TU9yYqavs81Oq3GkCmuiVGVbgDGY=" alt="" />
        </div>
        <div>
            <p>Biriyani</p>
            <p>Rs.499.00</p>
        </div>
        <Button  variant='outlined' disabled  className='cursor-not-allowed'>completed</Button>

    </Card>
  )
}

export default OrderCard
