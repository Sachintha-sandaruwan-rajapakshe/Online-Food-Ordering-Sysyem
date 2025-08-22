import { Create } from '@mui/icons-material'
import { Box, Card, CardHeader, IconButton, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';

const order=[1,1,1,1]
const MenuTable = () => {
  return (
    <Box>
        <Card className="px-5">
            <div className="flex items-center justify-between py-4">
                 <Typography variant="h5">Menu Item</Typography>
                <IconButton>
                <Create />
                </IconButton>
            </div>
        </Card>


    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Id</TableCell>
            <TableCell align="leftt">Image</TableCell>
            <TableCell align="left">Title</TableCell>
            <TableCell align="right">Ingredients</TableCell>
            <TableCell align="right">price</TableCell>
            <TableCell align="right">Avaliable</TableCell>
            <TableCell align="right">Delete</TableCell>
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
              <TableCell align="left">{"pizaa"}</TableCell>
              <TableCell align="right">{"source"}</TableCell>
              <TableCell align="right">{2300}</TableCell>
              <TableCell align="right">{"IN StOKE"}</TableCell>
              <TableCell align="right">{<IconButton> <DeleteIcon sx={{color:"RED"}}/> </IconButton>}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </Box>
  )
}

export default MenuTable
