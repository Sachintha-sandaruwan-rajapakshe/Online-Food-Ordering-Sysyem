import React from 'react'

const Orders = () => {
  return (
    <div className='flex items-center flex-col'>
      <h1 className='text-xl text-center py-7 font-semibold'></h1>
      <div className='space-y-5 w-full lg:w-1/2'>
        { Orders.map((item)=><OrderCard/>)}
      </div>
    </div>
  )
}

export default Orders
