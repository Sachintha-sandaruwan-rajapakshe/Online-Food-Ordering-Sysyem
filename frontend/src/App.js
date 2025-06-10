import logo from './logo.svg';
import './App.css';
import { Navbar } from './component/Navbar/Navbar';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { darkTheme } from './Theme/DarkTheme';
import Home from './component/Home/Home';
import RestaurentDetails from './component/Restaurent/RestaurentDetails';
import Cart from './component/Cart/Cart';
import Profile from './component/Profile/Profile';
import CustomerRouters from './component/Routers/CustomerRouters';
import { useDispatch, useSelector } from 'react-redux';
import { getUser } from './component/State/Authentication/Action';
import { useEffect } from 'react';

function App() {
  const dispatch = useDispatch();
  const jwt = localStorage.getItem("jwt")
  const {auth} =useSelector(store=>store)

  useEffect(()=>{
    dispatch(getUser(auth.jwt || jwt))
  },[auth.jwt])
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline/>
     <CustomerRouters/>
    </ThemeProvider>
  );
}

export default App;
