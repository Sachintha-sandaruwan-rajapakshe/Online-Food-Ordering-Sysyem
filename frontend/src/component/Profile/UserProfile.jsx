import React from 'react'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../State/Authentication/Action';

const UserProfile = () => {
  const {auth} = useSelector((store)=>store);
  const dispatch =useDispatch();
  const navigate=useNavigate();
  const handleLogout=()=>[
    dispatch(logout()),
    navigate('/')
  ]
  return (
    <div className='min-h-[80vh] flex flex-col justify-center items-center text-center'>
      <div className='flex flex-col justify-center items-center'>
        <AccountCircleIcon sx={{fontSize:'9rem'}}/>
        <h1 className='py-5 text-2xl font-semibold text-red-400'>{auth.user?.fullName}</h1>
        <p>{auth.user?.email}</p>
        <Button onClick={handleLogout} variant='outlined' sx={{margin:'2rem 0rem'}}>Logout</Button>
      </div>
    </div>
  )
}

export default UserProfile
