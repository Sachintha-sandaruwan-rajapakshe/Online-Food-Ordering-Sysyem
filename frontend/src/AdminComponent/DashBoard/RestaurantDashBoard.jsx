import { Grid, Grid2 } from '@mui/material'
import React from 'react'
import MenuTable from '../Menu/MenuTable'
import OrderTable from '../Orders/OrderTable'
import Orders from '../Orders/Orders'

const RestaurantDashBoard = () => {
  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={12} lg={6}>
          <MenuTable/>
        </Grid>
        <Grid item xs={12} lg={6}>
          <Orders/>
        </Grid>
      </Grid>
    </div>
  )
}

export default RestaurantDashBoard
