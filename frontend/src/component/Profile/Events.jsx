import React, { useEffect } from 'react';
import EventCard from './EventCard';
import { useDispatch, useSelector } from 'react-redux';
import { getEventsByAllRestaurant } from '../State/Event/Action';

const Events = () => {
   const dispatch = useDispatch();
    const jwt = localStorage.getItem('jwt');
    const { restaurant,event} = useSelector(store => store);

    useEffect(()=>{
      dispatch(getEventsByAllRestaurant({ jwt }))
    },[])

  return (
    <div className='mt-5 px-5 flex flex-wrap gap-5'>
      {event.events?.map((item)=><EventCard item={item}/>)}
    </div>
  )
}

export default Events
