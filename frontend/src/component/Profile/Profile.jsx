import React, { useEffect } from 'react'
import ProfileNavigation from './ProfileNavigation';
import { useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import UserProfile from './UserProfile';
import Address from './Address';
import Favorites from './Favorites';
import Events from './Events';
import Orders from './Orders';
import { useDispatch, useSelector } from 'react-redux';
import { getUserOrder } from '../State/Order/Action';

const Profile = () => {
    const [openSideBar,setOpenSideBar]=useState(false);
  return (
    <div className='lg:flex justify-between'>
        <div className='sticky h-[80vh] lg:w-[20%]'>
            <ProfileNavigation open={openSideBar}/>
        </div>
        <div className='lg:w-[80%]'>
          <Routes>
              <Route path='/' element={<UserProfile/>}/>
              <Route path='/orders' element={<Orders/>}/>
              <Route path='/address' element={<Address/>}/>
              <Route path='/favorites' element={<Favorites/>}/>
              <Route path='/events' element={<Events/>}/>
              
          </Routes>

        </div>
      
    </div>
  )
}

export default Profile
