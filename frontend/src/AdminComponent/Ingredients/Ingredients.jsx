import React from 'react'
import IngredientCategoryTable from './IngredientCategoryTable'
import IngredientTable from './IngredientTable'
const Ingredients = () => {
  return (
    <div className='flex'>
      <div className='lg:w-[60%]'>
          <IngredientTable/>
      </div>
      <div className='lg:w-[40%]'>
           <IngredientCategoryTable/>
      </div>
    </div>
  )
}

export default Ingredients
