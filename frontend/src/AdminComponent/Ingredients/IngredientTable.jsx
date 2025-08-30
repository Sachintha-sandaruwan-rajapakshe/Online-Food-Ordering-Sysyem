import { Create } from '@mui/icons-material'
import { Box, Card, CardHeader, IconButton, Modal, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import ConstructionIcon from '@mui/icons-material/Construction';
import CreateIngredientForm from './CreateIngredientForm';
import { useDispatch, useSelector } from 'react-redux';
import { getIngredientsOfRestaurent, updateStockOfIngredient } from '../../component/State/Ingredients/Action';

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
const IngredientTable = () => {
   const jwt  = localStorage.getItem('jwt');
  const dispatch = useDispatch();
  const{restaurant,ingredients}= useSelector(store=>store)

  useEffect(()=>{
     dispatch(getIngredientsOfRestaurent({ id:restaurant.userRestaurant?.id, jwt }));
  },[])

  console.log('ingredient ',ingredients)

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleUpdateStoke=(value)=>{
     dispatch(updateStockOfIngredient({ id:value, jwt }));
  }
  return (
    <Box sx={{paddingLeft:"1rem"}}>
        <Card className="px-5">
            <div className="flex items-center justify-between py-4">
                 <Typography variant="h5">Ingredient </Typography>
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
              <CreateIngredientForm/>
          </Box>
        </Modal>


    <TableContainer component={Paper}>
      <Table  aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Id</TableCell>
            <TableCell align="left">Name</TableCell>            
            <TableCell align="left">Category</TableCell>
            <TableCell align="left">Avaliability</TableCell>
            <TableCell align="right">Modify</TableCell>
            <TableCell align="right">Delete</TableCell>
           
          </TableRow>
        </TableHead>
        <TableBody>
          {ingredients.ingredients.map((item,index) => (
            <TableRow
              key={item.id || index}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {index+1}
              </TableCell>
              <TableCell align="left">{item.name}</TableCell>
              <TableCell align="left">{item.category?.name}</TableCell>
              <TableCell align="left"><span onClick={()=>handleUpdateStoke(item.id)} style={{ color: item.inStock ? "green" : "red" }}>
                  {item.inStock ? "In Stock" : "Out of Stock"}</span></TableCell>
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

export default IngredientTable
