import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AdminRoute from './AdminRoute'
import CustomerRouters from './CustomerRouters'


const Routers = () => {
  return (
    <div>
      <Routes>
        <Route path='/admin/restaurent/*' element={<AdminRoute/>}/>
        <Route path='/*' element={<CustomerRouters/>}/>
      </Routes>
    </div>
  )
}

export default Routers
