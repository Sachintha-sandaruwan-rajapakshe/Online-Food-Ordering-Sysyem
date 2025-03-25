import React from 'react'
import ProfileNavigation from './ProfileNavigation'
import { Divider } from '@mui/material'
import { useState } from 'react'

const Profile = () => {
    const [openSideBar,setOpenSideBar]=useState(false);
  return (
    <div className='lg:flex justify-between'>
        <div className='sticky h-[80vh] lg:w-[20%]'>
            <ProfileNavigation open={openSideBar}/>
        </div>
        <div className='lg:w-[80%]'>

        </div>
      
    </div>
  )
}

export default Profile
