import React from 'react'
import AdminSideBar from './AdminSideBar'
import { Route, Routes } from 'react-router-dom'
import Orders from '../Orders/Orders'
import Menu from '../Menu/Menu'
import FoodCategory from '../FoodCategory/FoodCategory'
import Ingredients from '../Ingredients/Ingredients'
import RestaurantDetails from './RestaurantDetails'
import Events from '../Events/Events'
import RestaurantDashBoard from '../DashBoard/RestaurantDashBoard'
import CreateMenuForm from '../Menu/CreateMenuForm'

const Admin = () => {
    const handelClose =()=>{

    }
  return (
    <div>
        <div className='lg:flex justify-between'>
            <div>
                <AdminSideBar handelClose={handelClose}/>
            </div>
            <div className='lg:w-[80%]'>
                <Routes>
                    <Route path='/'element={<RestaurantDashBoard/>}/>
                    <Route path='/orders'element={<Orders/>}/>
                    <Route path='/menu'element={<Menu/>}/>
                    <Route path='/category'element={<FoodCategory/>}/>
                    <Route path='/ingredients'element={<Ingredients/>}/>
                    <Route path='/details'element={<RestaurantDetails/>}/>
                    <Route path='/event'element={<Events/>}/>
                    <Route path='/add-menu'element={<CreateMenuForm/>}/>
                </Routes>
            </div>

        </div>
     
    </div>
  )
}

export default Admin
