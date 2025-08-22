import './App.css';
import { Navbar } from './component/Navbar/Navbar';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { darkTheme } from './Theme/DarkTheme';
import { useDispatch, useSelector } from 'react-redux';
import { getUser } from './component/State/Authentication/Action';
import { useEffect } from 'react';
import Routers from './component/Routers/Routers';

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
     <Routers/>
    </ThemeProvider>
  );
}

export default App;
