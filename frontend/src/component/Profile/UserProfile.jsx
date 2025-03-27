import React from 'react'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const UserProfile = () => {
  const navigate=useNavigate();
  const handleLogout=()=>[
    navigate('/')
  ]
  return (
    <div className='min-h-[80vh] flex flex-col justify-center items-center text-center'>
      <div className='flex flex-col justify-center items-center'>
        <AccountCircleIcon sx={{fontSize:'9rem'}}/>
        <h1 className='py-5 text-2xl font-semibold text-red-400'>Sachintha Sandaruwan</h1>
        <p>Email: sachinthasandaruwan8675@gmail.com</p>
        <Button onClick={handleLogout} variant='outlined' sx={{margin:'2rem 0rem'}}>Logout</Button>
      </div>
    </div>
  )
}

export default UserProfile
