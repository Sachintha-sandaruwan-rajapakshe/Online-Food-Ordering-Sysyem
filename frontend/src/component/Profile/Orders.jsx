import React, { useEffect } from 'react'
import OrderCard from './OrderCard'
import { useDispatch, useSelector } from 'react-redux';
import { getUserOrder } from '../State/Order/Action';
import { useNavigate } from 'react-router-dom';
const Orders = () => {
    const {auth,order} = useSelector((store)=>store);
    const jwt = localStorage.getItem('jwt');
    const dispatch = useDispatch();

    useEffect(()=>{
      dispatch(getUserOrder(jwt))
    },[auth.jwt])
  return (
    <div className='flex items-center flex-col'>
      <h1 className='text-xl text-center py-7 font-semibold'>Orders</h1>
      <div className='space-y-5 w-full lg:w-1/2'>
        { order.orders?.map((order)=>order.item.map((item)=><OrderCard orders={order}items={item}/>))}
      </div>
    </div>
  )
}

export default Orders
