import { Box, Card, CardHeader, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import React from 'react'

const order=[1,1,1,1]
const OrderTable = () => {
  return (
    <Box>
        <Card className='mt-1'>
            <CardHeader title="All Orders"
            sx={{paddingTop:2,alignItems:"center"}}
            />
        </Card>

    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Id</TableCell>
            <TableCell align="leftt">Image</TableCell>
            <TableCell align="left">Customer</TableCell>
            <TableCell align="right">Price</TableCell>
            <TableCell align="right">Name</TableCell>
            <TableCell align="right">Ingredients</TableCell>
            <TableCell align="right">Status</TableCell>
            <TableCell align="right">Update</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {order.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {1}
              </TableCell>
              <TableCell align="left">{"image"}</TableCell>
              <TableCell align="left">{"sachintha"}</TableCell>
              <TableCell align="right">{2600}</TableCell>
              <TableCell align="right">{"sanwich"}</TableCell>
              <TableCell align="right">{"Ingredient"}</TableCell>
              <TableCell align="right">{"completed"}</TableCell>
              <TableCell align="right">{"status"}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </Box>
  )
}

export default OrderTable
