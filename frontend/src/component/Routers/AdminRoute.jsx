import React from 'react'
import { Route, Routes } from 'react-router-dom'
import CreateRestaurantForm from '../../AdminComponent/CreateRestaurantForm/CreateRestaurantForm'
import Admin from '../../AdminComponent/Admin/Admin'
import { useSelector } from 'react-redux'

const AdminRoute = () => {
  const{restaurant} = useSelector(store => store) // {} warahan danne { } = object destructuring syntax.
  return (
    <div>
      <Routes>
        <Route path='/*' element={!restaurant.userRestaurant?<CreateRestaurantForm/>:<Admin/>}/>
      </Routes>
    </div>
  )
}

export default AdminRoute
