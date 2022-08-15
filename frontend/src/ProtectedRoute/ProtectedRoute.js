import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = ({ isAuthenticated, user, adminRoute, sellerRoute }) => {
  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  if (adminRoute && !user?.role === "admin") {
    return <Navigate to="/profile" />;
  }

  if (sellerRoute && !user?.role === "seller") {
    return <Navigate to="/profile" />;
  }

  return <Outlet />;
};

export default ProtectedRoute;
