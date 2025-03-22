import React from 'react'
import { Button, Card } from '@mui/material'
import HomeIcon from '@mui/icons-material/Home';

const AddressCard = () => {
    const handleSelectAddress =(item,showButton)=>{
    
    }
  return (
    <Card className='flex gap-5 w-64 p-5'>
        <HomeIcon/>
        <div className='space-y-3 text-gray-500'>
            <h1 className='font-semibold text-lg text-white'>Home</h1>
            <p className='text-gray-400 text-xs pt-1'>
            No 13/B2/2/1, Forest. Reserve Road, Hanthana. Housing Scheme Hanthana. Housing Scheme, Kandy Kandy. 0812218610,0716459385,. Mr. H.S.DASSANAYAKE. Linguist.
            </p>
            {showButton && (<Button variant="contained" fullWidth onClick={()=>handleSelectAddress()}>Select</Button>)}
        </div>
    </Card>
  )
}

export default AddressCard
