import { Card, FormControl, FormControlLabel, Radio, RadioGroup, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import OrderTable from './OrderTable';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRestaurantOrder } from '../../component/State/RestaurantOrder/Action';

const orderStatus = [
  { label: "Pending", value: "PENDING" },
  { label: "Completed", value: "COMPLETED" },
  { label: "All", value: "ALL" }
];

const Orders = () => {
  const [filterValue, setFilterValue] = useState("ALL");

  const dispatch = useDispatch();
  const jwt = localStorage.getItem('jwt');
  const { restaurant } = useSelector(store => store);

  const handleFilter = (event) => {
    setFilterValue(event.target.value);
  };

  useEffect(() => {
    if (restaurant.userRestaurant?.id) {
      dispatch(fetchRestaurantOrder({
        restaurantId: restaurant.userRestaurant.id,
        orderStatus: filterValue === "ALL" ? null : filterValue,
        jwt
      }));
    }
  }, [filterValue, restaurant.userRestaurant?.id, jwt, dispatch]);

  return (
    <div className='px-2'>
      <Card className='px-5'>
        <Typography sx={{ paddingBottom: '1rem', paddingTop: '1rem' }} variant='h5'>
          Order Status
        </Typography>
        <FormControl>
          <RadioGroup
            onChange={handleFilter}
            row
            name='category'
            value={filterValue}
          >
            {orderStatus.map((item) => (
              <FormControlLabel
                control={<Radio />}
                key={item.label}
                value={item.value}
                label={item.label}
                sx={{ color: "gray" }}
              />
            ))}
          </RadioGroup>
        </FormControl>
      </Card>
      
      <OrderTable filterValue={filterValue} />
    </div>
  )
}

export default Orders;
