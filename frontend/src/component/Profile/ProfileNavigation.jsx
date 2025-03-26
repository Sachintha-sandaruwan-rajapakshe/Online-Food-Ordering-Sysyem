import React from 'react';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import FavoriteIcon from '@mui/icons-material/Favorite';
import HomeIcon from '@mui/icons-material/Home';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import NotificationAddIcon from '@mui/icons-material/NotificationAdd';
import EventIcon from '@mui/icons-material/Event';
import LogoutIcon from '@mui/icons-material/Logout';
import { Divider, Drawer, useMediaQuery } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const menu = [
  { title: 'Orders', icon: <ShoppingBagIcon /> },
  { title: 'Favorite', icon: <FavoriteIcon /> },
  { title: 'Address', icon: <HomeIcon /> },
  { title: 'Payment', icon: <AccountBalanceWalletIcon /> },
  { title: 'Notification', icon: <NotificationAddIcon /> },
  { title: 'Events', icon: <EventIcon /> },
  { title: 'Logout', icon: <LogoutIcon /> },
];

const ProfileNavigation = ({ open, handleClose }) => {
  const isSmallScreen = useMediaQuery('(max-width:1080px)');
  const navigate=useNavigate();

  const handleNavigate=(item)=>[
    navigate(`/my-profile/${item.title.toLowerCase()}`)
  ]

  return (
    <Drawer
      variant={isSmallScreen ? 'temporary' : 'permanent'}
      open={open}
      onClose={handleClose} // Proper event handler for closing
      anchor="left"
      sx={{ zIndex: 1 ,position:'sticky'
      }}
    >
      <div className="w-[50vw] lg:w-[20vw] h-[98vh] flex flex-col justify-center text-xl gap-8 pt-16">
        {menu.map((item, i) => (
          <React.Fragment key={i}>
            <div onClick={()=>handleNavigate(item)} className="px-5 flex items-center space-x-5 cursor-pointer">
              {item.icon}
              <span>{item.title}</span>
            </div>
            {i !== menu.length - 1 && <Divider />}
          </React.Fragment>
        ))}
      </div>
    </Drawer>
  );
};

export default ProfileNavigation;
