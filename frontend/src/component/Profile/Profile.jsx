import React from 'react'
import ProfileNavigation from './ProfileNavigation'
import { Divider } from '@mui/material'

const Profile = () => {
  return (
    <div className='lg:flex justify-between'>
        <div className='sticky h-[80vh] lg:w-[20%]'>
            <ProfileNavigation/>
        </div>
        <Divider orientation='vertical' flexItem/>
        <div className='lg:w-[80%]'>

        </div>
      
    </div>
  )
}

export default Profile
