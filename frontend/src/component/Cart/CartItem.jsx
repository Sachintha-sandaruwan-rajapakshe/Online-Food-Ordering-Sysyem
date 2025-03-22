import {  Chip, IconButton } from '@mui/material'
import RemoveCircleOutlineOutlinedIcon from '@mui/icons-material/RemoveCircleOutlineOutlined';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
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
                                <RemoveCircleOutlineOutlinedIcon/>
                            </IconButton>

                            <div className='w-5 h-5 text-xs flex items-center justify-between'>
                                {5}
                            </div>

                            <IconButton>
                                <AddCircleOutlineIcon/>
                            </IconButton>
                        </div>
                        
                    </div>
                </div>
                <p>Rs.200.00</p>
            </div>
        </div>
        <div className='pt-3 space-x-2'>
                {[1,1,1].map((item)=><Chip label={'bread'}/>)}
        </div>
    </div>
  )
}

export default CartItem
