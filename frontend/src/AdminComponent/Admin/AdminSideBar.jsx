import { Category, Dashboard, Logout, ShoppingBag } from '@mui/icons-material'
import ShopTwoIcon from '@mui/icons-material/ShopTwo';
import CategoryIcon from '@mui/icons-material/Category';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import EventIcon from '@mui/icons-material/Event';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import React from 'react'
import { Divider, Drawer, useMediaQuery } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logout } from '../../component/State/Authentication/Action';

const AdminSideBar = ({handelClose}) => {
    const menu=[
        {title:"Dashboard",icon:<Dashboard/>,path:"/"},
        {title:"Order",icon:<ShoppingBag/>,path:"/orders"},
        {title:"Menu",icon:<ShopTwoIcon/>,path:"/menu"},
        {title:"Food Category",icon:<CategoryIcon/>,path:"/category"},
        {title:"Ingredients",icon:<FastfoodIcon/>,path:"/ingredients"},
        {title:"Events",icon:<EventIcon/>,path:"/event"},
        {title:"Details",icon:<AdminPanelSettingsIcon/>,path:"/details"},
        {title:"Logout",icon:<Logout/>,path:"/"},
    ];
    const isSmallScreen= useMediaQuery("(max-width:1080px)")// 1080px ට අඩු හෝ සමාන (≤1080px) තිර වලදී isSmallScreen = true වෙයි.1080px ට වැඩි (>1080px) තිර වලදී isSmallScreen = false වෙයි.
    const navigate =useNavigate();
    const dispatch = useDispatch();
    const handelNavigate=(item)=>{
        navigate(`/admin/restaurent${item.path}`)
        console.log(item.path);
        if(item.title==="Logout"){
            dispatch(logout());
            navigate(`/`);
            handelClose()
        }
    }
  return (
    <div>
       <>
       <Drawer 
        variant={isSmallScreen?"temporary":"permanent"}
        onClose={handelClose}
        open={true} 
        anchor='left' 
        sx={{zIndex:1}}>
            <div className='w-[70vw] lg:w-[20vw] h-screen flex flex-col justify-center text-xl space-y-[1.65rem]'> 
                {menu.map((item,index)=><>
                    <div onClick={()=>handelNavigate(item)}className='px-5 flex items-center gap-5 cursor-pointer'>
                        {item.icon}
                        <span>{item.title}</span>
                    </div>
                    {index < menu.length - 1 && <Divider />}
                </>)}
            </div>
        
       </Drawer>
       </>
    </div>
  )
}

export default AdminSideBar
