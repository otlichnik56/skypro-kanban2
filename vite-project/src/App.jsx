import React, { useEffect, useState } from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute/PrivateRoute.jsx';
import MainPage from './pages/MainPage/MainPage.jsx';
import CardPage from './pages/CardPage/CardPage.jsx';
import NewCardPage from './pages/NewCardPage/NewCardPage.jsx';
import LoginPage from './pages/LoginPage/LoginPage.jsx';
import RegPage from './pages/RegPage/RegPage.jsx';
import ExitPage from './pages/ExitPage/ExitPage.jsx';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage.jsx';
import { useUser } from './hooks/useUser';

function App() {
  const { userData } = useUser();
  const [isAuth, setIsAuth] = useState(!!userData);

  useEffect(() => {
    console.log('User data changed:', userData);
    setIsAuth(!!userData);
  }, [userData]);

  const appRoutes = {
    LOGIN: "/login",
    REG: "/reg",
    MAIN: "/",
    CARD: "/card/:id",
    NEWCARD: "/newcard",
    EXIT: "/exit",
    NOTFOUND: "*"
  };

  return (
    <Routes>
      <Route path={appRoutes.LOGIN} element={<LoginPage />} />
      <Route path={appRoutes.REG} element={<RegPage />} />
      <Route element={<PrivateRoute isAuth={isAuth} />}>
        <Route path={appRoutes.MAIN} element={<MainPage />} >
          <Route path={appRoutes.CARD} element={<CardPage />} />
          <Route path={appRoutes.NEWCARD} element={<NewCardPage />} />
          <Route path={appRoutes.EXIT} element={<ExitPage />} />
        </Route>        
      </Route>
      <Route path={appRoutes.NOTFOUND} element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;