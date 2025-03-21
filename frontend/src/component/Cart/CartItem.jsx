import { IconButton } from '@mui/material'
import React from 'react'

const CartItem = () => {
  return (
    <div className='px-5'>
        <div className='lg:flex items-center lg:space-x-5'>
            <div>
                <img className='w-[5rem] h-[5rem] object-cover' 
                    src="https://cdn.pixabay.com/photo/2017/12/10/14/47/pizza-3010062_640.jpg" 
                    alt="" />
            </div>
            <div className='flex items-center justify-between lg:w-[70%]'> 
                <div className='space-y-1 lg:space-y-3 w-full'>
                    <p>Pizza</p>
                    <div className='flex justify-between items-center'>
                        <div className='flex items-center space-x-1'> 
                            <IconButton>
                                
                            </IconButton>
                        </div>
                    </div>
                </div>

            </div>

        </div>
      
    </div>
  )
}

export default CartItem
