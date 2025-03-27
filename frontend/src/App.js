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

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline/>
      { /* <Navbar/>*/}
     { /*<Home/>*/}
     { /*<RestaurentDetails/>*/}
     {/*<Cart/>*/}
     {/*<Profile/>*/}
     <CustomerRouters/>
    </ThemeProvider>
  );
}

export default App;
