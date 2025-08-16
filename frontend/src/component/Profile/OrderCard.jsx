import { Button, Card } from '@mui/material'
import React from 'react'

const OrderCard = ({items}) => {
  console.log('data : ',items);
  return (
    <Card className='flex justify-between items-center p-4'>
        <div className='flex items-center space-x-2'>
            <img className='' alt="" />
        </div>
        <div>
            <p></p>
            <p></p>
        </div>
        <Button  variant='outlined' disabled  className='cursor-not-allowed'></Button>

    </Card>
  )
}

export default OrderCard
