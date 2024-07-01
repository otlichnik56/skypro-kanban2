import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { appRoutes } from '../../services/helper';

const PrivateRoute = ({ isAuth }) => {
  return isAuth ? <Outlet /> : <Navigate to={appRoutes.LOGIN} />;
};

export default PrivateRoute;