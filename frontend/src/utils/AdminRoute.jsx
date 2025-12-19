import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const AdminRoute = ({ user, loading }) => {
  console.log("AdminRoute user:", user);

  if (loading) return null;
  if (!user) return <Navigate to="/access-denied" replace />;
  if (user.role !== "admin") return <Navigate to="/access-denied" replace />;

  return <Outlet />;
};

export default AdminRoute;
