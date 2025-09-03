import { Card, CardActions, CardContent, CardMedia, IconButton, Typography } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { deleteRestaurantEvent } from '../../component/State/Event/Action';
import { format } from 'date-fns';   // <-- මේක add කරන්න

const EventCard = ({item}) => {

    const dispatch = useDispatch();
    const jwt = localStorage.getItem('jwt');
    const { restaurant,event} = useSelector(store => store);
  
    const handelDeleteEvent=(id)=>{
      dispatch(deleteRestaurantEvent({ eventId:id, jwt }))
    }

    // format date helper
    const formatDate = (dateString) => {
      if (!dateString) return "";
      return format(new Date(dateString), "MMMM dd, yyyy hh:mm a");
    };

    return (
      <div>
        <Card sx={{width:278}}>
          <CardMedia 
              image={item.images?.[0]}
              sx={{ height: 345 }}
          />
          <CardContent>
              <Typography variant='h5' component={'div'} color='red'>
                  {item.eventName}
              </Typography>
              <Typography variant='body2' component={'div'}>
                  50% off your first order
              </Typography>
              <div className='py-2 space-y-2'>
                <p className='text-yellow-400'>{'Sri lankan'}</p>
                <p className='text-sm text-blue-200'>{formatDate(item.startDate)}</p>
                <p className='text-sm text-red-500'>{formatDate(item.endDate)}</p>
              </div>
          </CardContent>

          {true && <CardActions>
            <IconButton onClick={()=>handelDeleteEvent(item.id)}>
              <DeleteIcon/>
            </IconButton>
          </CardActions>}
        </Card>
      </div>
    )
}

export default EventCard
