// import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoute = () => {
  const isAuthenticated = useSelector((state) => state.auth.isLoggedIn);
  return isAuthenticated ? <Outlet /> : <Navigate to={'/login'} />;
};

export default ProtectedRoute;
