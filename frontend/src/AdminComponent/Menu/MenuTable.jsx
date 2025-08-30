import { Create } from '@mui/icons-material'
import { Box, Card, CardHeader, Chip, IconButton, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { deleteFoodAction, getMenuItemsByRestaurantId, updateMenuItemAvailability } from '../../component/State/Menu/Action';

const order=[1,1,1,1]
const MenuTable = () => {

  const dispatch = useDispatch();
  const jwt = localStorage.getItem('jwt');
  const { restaurant,menu} = useSelector(store => store);

  useEffect(()=>{
    dispatch(getMenuItemsByRestaurantId({reqData:{restaurentId:restaurant.userRestaurant?.id},jwt}))
  },[]);

  const handleChangeFoodStatus=(item)=>{
    dispatch(updateMenuItemAvailability({foodId:item?.id,jwt}));
  }

  const handledeleteItem=(item)=>{
    dispatch(deleteFoodAction({foodId:item?.id,jwt}))
  }

  const navigate=useNavigate();
  return (
    <Box>
        <Card className="px-5">
            <div className="flex items-center justify-between py-4">
                 <Typography variant="h5">Menu Item</Typography>
                <IconButton onClick={()=>navigate('/admin/restaurent/add-menu')}>
                <Create />
                </IconButton>
            </div>
        </Card>


    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Id</TableCell>
            <TableCell align="left">Image</TableCell>
            <TableCell align="left">Title</TableCell>
            <TableCell align="left">Ingredients</TableCell>
            <TableCell align="right">price</TableCell>
            <TableCell align="right">Avaliable</TableCell>
            <TableCell align="right">Delete</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {menu.menuItems?.map((item,index) => (
            <TableRow
              key={item.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {index+1}
              </TableCell>
              <TableCell align="left">
                <img 
                  src={item.images[0]} 
                  alt={item.name}  
                  className="h-12 w-12 object-cover rounded" 
                />
              </TableCell>
              <TableCell align="left">{item.name}</TableCell>
              <TableCell align="left">
                {item.ingredients?.map((ing) => (
                  <Chip 
                    key={ing.id} 
                    label={ing.name} 
                    size="small" 
                    style={{ marginRight: '4px', marginBottom: '4px' }}
                  />
                ))}
              </TableCell>
              <TableCell align="right">Rs.{item.price}.00</TableCell>
              <TableCell align="right" onClick={() => handleChangeFoodStatus(item)} style={{ cursor: 'pointer' }}>
                <Chip 
                  label={item.availabel ? "In Stock" : "Out of Stock"} 
                  style={{ 
                    backgroundColor: item.availabel ? "green" : "red", 
                    color: "white",
                    fontWeight: "bold"
                  }} 
                />
              </TableCell>
              <TableCell align="right" onClick={()=>handledeleteItem(item)}>{<IconButton> <DeleteIcon sx={{color:"RED"}}/> </IconButton>}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </Box>
  )
}

export default MenuTable
