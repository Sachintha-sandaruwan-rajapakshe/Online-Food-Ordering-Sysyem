import React from 'react'
import Restaurentcard from '../Restaurent/Restaurentcard'

const Favorites = () => {
  return (
    <div>
      <h1 className='py-5 text-xl font-semibold text-center'>My Favorites</h1>
      <div className='flex flex-wrap justify-center gap-3'>
        {[1,1,1,1].map((item)=><Restaurentcard/>)}
      </div>
    </div>
  )
}

export default Favorites
