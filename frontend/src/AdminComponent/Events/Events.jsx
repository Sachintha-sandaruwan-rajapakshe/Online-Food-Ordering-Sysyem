import React, { useEffect } from 'react'
import EventCard from './EventCard'
import { Create } from '@mui/icons-material'
import { Box, Card, IconButton, Modal, Typography } from '@mui/material'
import CreateEvent from './CreateEvent';
import { useDispatch, useSelector } from 'react-redux';
import { getRestaurantEvents } from '../../component/State/Event/Action';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const Events = () => {

    const dispatch = useDispatch();
  const jwt = localStorage.getItem('jwt');
  const { restaurant,event} = useSelector(store => store);

  useEffect(()=>{
    dispatch(getRestaurantEvents({ restaurentId:restaurant.userRestaurant.id, jwt }))
  },[]);

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Card sx={{ px: 5 }}>
        <div className="flex items-center justify-between py-4">
          <Typography variant="h5">Events</Typography>
          <IconButton onClick={handleOpen}>
            <Create />
          </IconButton>
        </div>
      </Card>

      <div>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <CreateEvent/>
          </Box>
        </Modal>
      </div>

      <div className='mt-5 px-5 flex flex-wrap gap-5'>
        {event.events?.map((item)=><EventCard item={item}/>)}
      </div>
    </div>
    
  )
}

export default Events
