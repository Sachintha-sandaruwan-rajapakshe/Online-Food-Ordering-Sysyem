import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Home/Home'
import RestaurentDetails from '../Restaurent/RestaurentDetails'
import Cart from '../Cart/Cart'
import Profile from '../Profile/Profile'
import { Navbar } from '../Navbar/Navbar'
import Auth from '../Auth/Auth'
import PaymentSuccess from '../PaymentSuccess/PaymentSuccess'

const CustomerRouters = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/account/:register' element={<Home/>}/>
        <Route path='/restaurent/:city/:title/:id' element={<RestaurentDetails/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/my-profile/*' element={<Profile/>}/>
        <Route path='/payment/success/:id' element={<PaymentSuccess/>}/>
      </Routes>
      <Auth/>
    </div>
  )
}

export default CustomerRouters
