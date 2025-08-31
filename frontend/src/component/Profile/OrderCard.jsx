import { Button, Card } from '@mui/material'
import React from 'react'

const OrderCard = ({items,orders}) => {
  return (
    <Card className='flex justify-between items-center p-4'>
        <div className='flex items-center space-x-2'>
            <img className='h-10 w-10' 
            src={items.food?.images[0]}
            alt="" />
        </div>
        <div>
            <p>{items.food?.name}</p>
            <p>{items.food?.price}</p>
        </div>
        <Button  variant='outlined' disabled  className='cursor-not-allowed'>{orders.orderStatus}</Button>

    </Card>
  )
}

export default OrderCard
