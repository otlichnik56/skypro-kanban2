import React, { useState } from 'react'
import './App.css';
//import Header from './components/Header/Header';
//import Content from './components/Content/Content';
//import ExitFormPopup from './components/popups/ExitFormPopup/ExitFormPopup.jsx';
//import NewCardPopup from './components/popups/NewCardPopup/NewCardPopup';
//import BrowseCardPopup from './components/popups/BrowseCardPopup/BrowseCardPopup';
//import {cardList} from './data.js';
//import { GlobalStyle } from './global.styled.js';
import { Route, Routes } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute/PrivateRoute.jsx';
import MainPage from './pages/MainPage/MainPage.jsx';
import CardPage from './pages/CardPage/CardPage.jsx';
import LoginPage from './pages/LoginPage/LoginPage.jsx';
import RegPage from './pages/RegPage/RegPage.jsx';
import ExitPage from './pages/ExitPage/ExitPage.jsx';

function App() {

  const [isAuth, setState] = useState(true);
  
  const toggleIsAuth = () => {
    setState(!isAuth);
  };

  const appRoutes = {
    LOGIN: "/login",
    REG: "/reg",
    MAIN: "/",
    CARD: "/card/:id",
    EXIT: "/exit"
  };

  return (
    <Routes>
      <Route element={<PrivateRoute isAuth={isAuth} />}>
        <Route path={appRoutes.MAIN} element={<MainPage />} >
          <Route path={appRoutes.CARD} element={<CardPage />} />
          <Route path={appRoutes.EXIT} element={<ExitPage />} />
        </Route>
      </Route>
      <Route path={appRoutes.LOGIN} element={<LoginPage />} />
      <Route path={appRoutes.REG} element={<RegPage />} />
    </Routes>
  );
}

export default App;



