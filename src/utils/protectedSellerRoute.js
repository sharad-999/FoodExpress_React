import React from 'react';
import { useSelector } from 'react-redux';
import { Outlet, Navigate } from 'react-router-dom';

const ProtectedSellerRoute = () => {
  const isSeller = useSelector((state) => state.auth.user.role);
  return isSeller === 'Seller' ? <Outlet /> : <Navigate to={'/'} />;
};

export default ProtectedSellerRoute;
