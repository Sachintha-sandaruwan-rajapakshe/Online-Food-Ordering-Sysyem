import './App.css';
import { Navbar } from './component/Navbar/Navbar';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { darkTheme } from './Theme/DarkTheme';
import { useDispatch, useSelector } from 'react-redux';
import { getUser } from './component/State/Authentication/Action';
import { useEffect } from 'react';
import Routers from './component/Routers/Routers';
import { getRestaurentByUserId } from './component/State/Restaurent/Action';
import { findCart } from './component/State/Cart/Action';

function App() {
  const dispatch = useDispatch();
  const jwt = localStorage.getItem("jwt")
  const {auth} =useSelector(store=>store)

  useEffect(()=>{
    dispatch(getUser(auth.jwt || jwt));
    dispatch(findCart(jwt));
  },[auth.jwt]);

  useEffect(()=>{
    dispatch(getRestaurentByUserId(auth.jwt || jwt))
  },[auth.user]);
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline/>
     <Routers/>
    </ThemeProvider>
  );
}

export default App;
