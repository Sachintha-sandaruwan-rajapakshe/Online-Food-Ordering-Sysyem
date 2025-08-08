import { Card, Chip, IconButton } from '@mui/material'
import React from 'react'
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import{addToFavorite}from '../State/Authentication/Action'
import { isPresentInFavorites } from '../config/logic';
import { useSelector } from 'react-redux';

const Restaurentcard = ({item}) => {
    const navigate = useNavigate();
    const dispatch =useDispatch();
    const jwt = localStorage.getItem('jwt');
    const { auth } = useSelector(store => store);

    const handelAddToFavorites=()=>{
        dispatch(addToFavorite({jwt,restaurentId:item.id}))
    }
  return (
    <Card className=' w-[18rem]'>
        <div className={`${true?'cursor-pointer':'curser-not-allowed'} relative `}>
            <img className='w-full h-[10rem] rounded-t-md object-cover' src={item.images[0]} alt="" />
            <Chip
                size="small"
                className="absolute top-2 left-2"
                color={item.open?'success':'error'}
                label={item.open?'open':'closed'}
            />
        </div>
        <div className='p-4 textPart lg:flex w-full justify-between'> 
            <div className='space-y-1'>
                <p className='font-semibold text-lg'>
                    {item.name}
                </p>
                <p className='text-gray-500 text-sm'>
                    {item.description}
                </p>
            </div>
        </div>
        <div>
            <IconButton onClick={handelAddToFavorites}>
                {isPresentInFavorites(auth.favorites,item)?<FavoriteIcon/>:<FavoriteBorderIcon/>}
            </IconButton>
        </div>

    </Card>
    
  )
}

export default Restaurentcard

