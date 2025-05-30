import React from 'react'
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import Avatar from '@mui/material/Avatar';
import { pink} from '@mui/material/colors';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Badge from '@mui/material/Badge';
import './Navbar.css';
import { Box } from '@mui/material';
import { Person } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <Box className='px-5 pb-1 sticky top-0 z-50 py-[.8rem] bg-[#e91e63] lg:px-20 flex justify-between'>
        
            <div className='lg:mr-10 curser-pointer flex items-center'>
                <li className='logo font-semibold text-gray-300 text-2xl'>
                Sachi Food
              </li>
            </div>
        
        <div className='flex items-center space-x-2 lg:space-x-10'>
          <div className=''>
            <IconButton>
                <SearchIcon sx={{fontSize:'1.5rem'}}/>
            </IconButton>
          </div>
          <div className=''>
                {false ? <Avatar sx={{backgroundColor:'white',color:pink.A400}}>C</Avatar>:
                <IconButton onClick={()=>navigate('/account/login')}>
                    <Person/>
                </IconButton>
                }
          </div>
          <div className=''>
            <IconButton>
              <Badge  badgeContent={3}>
                <ShoppingCartIcon sx={{fontSize:'1.5rem'}}/>
              </Badge>
            </IconButton>
          </div>


        </div>
        
    </Box>
  )
}
 
export {Navbar};
