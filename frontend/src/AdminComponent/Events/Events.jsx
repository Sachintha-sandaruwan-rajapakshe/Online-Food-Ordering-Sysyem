import React from 'react'
import EventCard from './EventCard'

const Events = () => {
  return (
    <div className='mt-5 px-5 flex flex-wrap gap-5'>
      {[0,1,2].map((item)=><EventCard/>)}
    </div>
  )
}

export default Events
