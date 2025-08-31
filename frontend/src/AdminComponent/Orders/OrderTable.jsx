import { Avatar, AvatarGroup, Box, Button, Card, CardHeader, Chip, Menu, MenuItem, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateOrderStatus } from '../../component/State/RestaurantOrder/Action';

const orderStatus = [
  { label: "Pending", value: "PENDING" },
  { label: "Completed", value: "COMPLETED" },
  { label: "Out For Delivery", value: "OUT_FOR_DELIVERY" },
  { label: "Delivered", value: "DELIVERED" },
];

const OrderTable = () => {
  const { restaurantOrder } = useSelector(store => store);
  const jwt = localStorage.getItem('jwt');
  const dispatch = useDispatch();

  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedOrderId, setSelectedOrderId] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event, orderId) => {
    setAnchorEl(event.currentTarget);
    setSelectedOrderId(orderId);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setSelectedOrderId(null);
  };

  const handleUpdateOrder = (orderStatusValue) => {
    if (!selectedOrderId) return;
    dispatch(updateOrderStatus({ orderId: selectedOrderId, orderStatus: orderStatusValue, jwt }));
    handleClose();
  };

  return (
    <Box>
      <Card className='mt-1'>
        <CardHeader
          title="All Orders"
          sx={{ paddingTop: 2, alignItems: "center" }}
        />
      </Card>

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Id</TableCell>
              <TableCell align="left">Image</TableCell>
              <TableCell align="left">Customer</TableCell>
              <TableCell align="right">Price</TableCell>
              <TableCell align="right">Name</TableCell>
              <TableCell align="right">Ingredients</TableCell>
              <TableCell align="right">Status</TableCell>
              <TableCell align="right">Update</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {restaurantOrder.orders?.map((items, index) => (
              <TableRow
                key={items.id || index}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {index + 1}
                </TableCell>
                <TableCell align="left">
                  <AvatarGroup>
                    {items.item.map((orderItem, i) => (
                      <Avatar key={i} src={orderItem.food?.images[0]} />
                    ))}
                  </AvatarGroup>
                </TableCell>
                <TableCell align="left">{items.customer?.fullName}</TableCell>
                <TableCell align="right">{items.totalPrice}</TableCell>
                <TableCell align="right">
                  {items.item.map((orderItem, i) => (
                    <p key={i}>{orderItem.food.name}</p>
                  ))}
                </TableCell>
                <TableCell align="right">
                  {items.item.map((orderItem, i) => (
                    <div key={i}>
                      {orderItem.ingredients.map((ingredient, j) => (
                        <Chip key={j} label={ingredient} />
                      ))}
                    </div>
                  ))}
                </TableCell>
                <TableCell align="right">{items.orderStatus}</TableCell>
                <TableCell align="right">
                  <Button
                    id="basic-button"
                    aria-controls={open ? 'basic-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    onClick={(e) => handleClick(e, items.id)}
                  >
                    update
                  </Button>
                  <Menu
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                  >
                    {orderStatus.map((status) => (
                      <MenuItem
                        key={status.value}
                        onClick={() => handleUpdateOrder(status.value)}
                      >
                        {status.label}
                      </MenuItem>
                    ))}
                  </Menu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default OrderTable;
