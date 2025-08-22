import { Card, FormControl, FormControlLabel, Radio, RadioGroup, Typography } from '@mui/material'
import React, { useState } from 'react'
import OrderTable from './OrderTable';

const orderStatus=[
  {label:"Pending",value:"PENDING"},
  {label:"Completed",value:"COMPLETED"},
  {label:"All",value:"ALL"}
]
const Orders = () => {
  const[filterValue,setFilterValue]=useState();
  const handleFilter=(event,value)=>{
    setFilterValue(value)
  }
  console.log(" value :",filterValue)
  return (
    <div className='px-2'>
      <Card className='px-5'>
        <Typography sx={{paddingBottom:'1rem',paddingTop:'1rem'}}variant='h5'>Order Status</Typography>
        <FormControl>

          <RadioGroup onChange={handleFilter}row name='category'value={filterValue || "all"}>

            {orderStatus.map((item)=><FormControlLabel 
              control={<Radio/>} 
              key={item.label} 
              value={item.value}
              label={item.label}
              sx={{color:"gray"}}
              />)}
          </RadioGroup>
        </FormControl>
      </Card>
      
      <OrderTable/>
  
    </div>
  )
}

export default Orders
