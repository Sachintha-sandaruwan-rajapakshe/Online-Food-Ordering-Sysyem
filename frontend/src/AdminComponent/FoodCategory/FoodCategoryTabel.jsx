import { Create } from '@mui/icons-material'
import { Box, Card, CardHeader, IconButton, Modal, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import ConstructionIcon from '@mui/icons-material/Construction';
import CreateFoodCategoryForm from './CreateFoodCategoryForm';

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

const order=[1,1,1,1]
const FoodCategoryTable = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <Box sx={{paddingLeft:"1rem"}}>
        <Card className="px-5">
            <div className="flex items-center justify-between py-4">
                 <Typography variant="h5">Food Category</Typography>
                <IconButton onClick={handleOpen}>
                <Create />
                </IconButton>
            </div>
        </Card>
        
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
              <CreateFoodCategoryForm/>
          </Box>
        </Modal>


    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Id</TableCell>
            <TableCell align="left">Name</TableCell>            
            <TableCell align="right">modify</TableCell>
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
              <TableCell align="left">{"Pizza"}</TableCell>
              <TableCell align="right">{<IconButton> <ConstructionIcon sx={{color:"Green"}}/> </IconButton>}</TableCell>
              <TableCell align="right">{<IconButton> <DeleteIcon sx={{color:"RED"}}/> </IconButton>}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </Box>
  )
}

export default FoodCategoryTable
