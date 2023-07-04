import { BrowserRouter,Navigate,Routes, Route } from "react-router-dom";
import HomePage from "scenes/homePage";
import LoginPage from "scenes/loginPage";
import ProfilePage from "scenes/profilePage";
import React from "react";
import {useMemo} from "react";
import { UseSelector, useSelector } from "react-redux/es/hooks/useSelector";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material";
import { themeSettings } from "theme";
import state from "state";

function App() {
  const mode= useSelector((state)=>state.mode);
  const theme= useMemo(()=>createTheme(themeSettings(mode)),[mode]);
  const isAuth = Boolean(useSelector(state=>state.token));
  return (
    <div className="app">
      <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline/>
      <Routes>
        <Route path='/' element ={<LoginPage/>} />
        <Route path='/home' element= {isAuth ? <HomePage/> : <Navigate to="/"/>} />
        <Route path= '/profile/:userId' element={isAuth? <ProfilePage/>:<Navigate to="/"/>}/>
      </Routes>
      </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
